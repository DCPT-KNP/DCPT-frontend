import MainLayout from '@/components/layout/MainLayout';
import SelectionMap from '@/components/SelectionMap';
import { IShapeModelCard } from '@/interfaces/shapemodel';
import { navList, NavListMetaDataType } from '@/metadata/nav';
import { cardList } from '@/metadata/shape-model';
import { SubHeadline, Title1 } from '@/styles/typography';
import {
  GetStaticPaths,
  GetStaticPathsResult,
  GetStaticProps,
  GetStaticPropsContext
} from 'next';
import { ReactElement } from 'react';
import tw from 'twin.macro';

const RightSection = tw.section`flex flex-col pr-16`;
const Title = tw(Title1)`font-bold text-[#666666] mb-12`;
const LeftSection = tw.section`flex`;
const HeadLine = tw(SubHeadline)``;

const TypePage = (
  props: ReturnType<GetStaticProps> & { data: IShapeModelCard & NavListMetaDataType }
) => {
  return (
    <>
      <RightSection>
        <Title>{props?.data?.title}</Title>
        <SelectionMap />
      </RightSection>
      <LeftSection>
        <HeadLine>Choose {props?.data?.navTitle}</HeadLine>
      </LeftSection>
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
