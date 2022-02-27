import MainLayout from '@/components/layout/MainLayout';
import { IShapeModelCard } from '@/interfaces/shapemodel';
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

const TypePage = (props: ReturnType<GetStaticProps> & { data: IShapeModelCard }) => {
  return (
    <MainLayout>
      <RightSection>
        <Title>{props?.data?.title}</Title>
      </RightSection>
      <LeftSection>
        <HeadLine></HeadLine>
      </LeftSection>
    </MainLayout>
  );
};

TypePage.getLayout = function getLayout(page: ReactElement) {
  return <div>hello{page}</div>;
};

export const getStaticPaths: GetStaticPaths = () => {
  const paths: GetStaticPathsResult['paths'] = cardList.map((item) => ({
    params: { type: item.type }
  }));
  return {
    paths,
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = (context: GetStaticPropsContext) => {
  const typeKey = context?.params?.type;
  if (!typeKey) {
    return {
      notFound: true
    };
  }
  return {
    props: {
      data: cardList.find(({ type }) => type === typeKey)
    }
  };
};

export default TypePage;
