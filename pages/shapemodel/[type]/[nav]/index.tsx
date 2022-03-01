import MainLayout from '@/components/layout/MainLayout';
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
const Title = tw(Title1)`font-bold text-[#666666]`;
const LeftSection = tw.section`flex`;
const HeadLine = tw(SubHeadline)``;

const TypePage = (
  props: ReturnType<GetStaticProps> & { data: IShapeModelCard & NavListMetaDataType }
) => {
  return (
    <>
      <RightSection>
        <Title>{props?.data?.title}</Title>
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
        return { nav: item.key };
      }
    })
    .filter((i) => i);
  const paths: GetStaticPathsResult['paths'] = cardPaths.flatMap((cardPath) => {
    const path = navPaths.map((navPath) => ({
      params: {
        type: cardPath.type,
        nav: navPath?.nav
      }
    }));
    return path;
  });
  return {
    paths,
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = (context: GetStaticPropsContext) => {
  const typeKey = context?.params?.type;
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
        ...navList.find(({ key }) => key === navKey)
      }
    }
  };
};

export default TypePage;
