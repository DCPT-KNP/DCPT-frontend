import MainLayout from '@/components/layout/MainLayout';
import SelectionMap from '@/components/SelectionMap/SelectionMap';
import { IShapeModelCard } from '@/interfaces/shapemodel';
import { navList, NavListMetaDataType } from '@/metadata/nav';
import { cardList } from '@/metadata/shape-model';
import { chooseSkillsMetaData, ChooseSkillType } from '@/metadata/choose-skills';
import { SubHeadline, Title1 } from '@/styles/typography';
import {
  GetStaticPaths,
  GetStaticPathsResult,
  GetStaticProps,
  GetStaticPropsContext
} from 'next';
import { ReactElement, useState } from 'react';
import tw from 'twin.macro';
import ChooseSkillCard from '@/components/ChooseSkillCard/ChooseSkillCard';

const LeftSection = tw.section`flex flex-col pr-16 border-r py-[104px]`;
const Title = tw(Title1)`font-bold text-[#666666] mb-12`;
const RightSection = tw.section`flex flex-col pl-16 py-[104px]`;
const HeadLine = tw(SubHeadline)`font-bold whitespace-nowrap mb-8`;
const SkillsBox = tw.div`flex flex-wrap gap-4`;

const TypePage = (
  props: ReturnType<GetStaticProps> & { data: IShapeModelCard & NavListMetaDataType }
) => {
  const [selectedMaps, setSelectedMaps] = useState();
  return (
    <>
      <LeftSection>
        <Title>{props?.data?.title}</Title>
        <SelectionMap />
      </LeftSection>
      <RightSection>
        <HeadLine>Choose {props?.data?.navTitle}</HeadLine>
        <SkillsBox>
          {chooseSkillsMetaData?.map(
            ({ key, title, content, color }: ChooseSkillType) => (
              <ChooseSkillCard
                key={key}
                title={title}
                content={content}
                color={color}
                onClick={() => console.log(title)}
              />
            )
          )}
        </SkillsBox>
      </RightSection>
    </>
  );
};

TypePage.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export const getStaticPaths: GetStaticPaths = () => {
  const cardPaths = cardList.map((item) => ({ type: item.type }));
  const navPaths = navList
    .map((item) => {
      if (item.key !== 'shape_model') {
        return { nav: item.key, containTypes: item.containTypes };
      }
    })
    .filter((i) => i);
  const paths: GetStaticPathsResult['paths'] = cardPaths
    .flatMap((cardPath) => {
      return navPaths.map(
        (navPath) =>
          navPath?.containTypes.includes(cardPath.type) && {
            params: {
              type: cardPath.type,
              nav: navPath?.nav
            }
          }
      );
    })
    .filter((i) => i) as NonNullable<GetStaticPathsResult['paths']>;
  return {
    paths,
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = (context: GetStaticPropsContext) => {
  const typeKey = context?.params?.type as IShapeModelCard['type'];
  const navKey = context?.params?.nav;
  if (!typeKey) {
    return {
      notFound: true
    };
  }
  return {
    props: {
      data: {
        ...cardList.find(({ type }) => type === typeKey),
        ...navList.find(
          ({ key, containTypes }) => key === navKey && containTypes.includes(typeKey)
        )
      }
    }
  };
};

export default TypePage;
