import PageTitle from '@/components/atoms/IndexPage/PageTitle';
import Btn from '@/components/common/Btn';
import MainLayout from '@/components/layout/MainLayout';
import LoadmapCard from '@/components/roadmap/RoadmapCard';
import RoadmapDesc from '@/components/roadmap/RoadmapDesc';
import Router from 'next/router';
import { ReactElement } from 'react';
import tw from 'twin.macro';

const RightSection = tw.section`flex flex-col pr-16`;
const BtnLayout = tw.div`flex items-end h-full`;

const Roadmap = () => {
  const handleClickGoToShapeModel = () => {
    Router.push('/shapemodel');
  };
  return (
    <>
      <RightSection>
        <PageTitle firstDesc="What is" secondDesc="Career Roadmap?" />
        <RoadmapDesc />
        <BtnLayout>
          <Btn
            styles={{ size: '20', bgColor: '#1A1A1A', color: '#FFFFFF' }}
            name="로드맵 제작"
            onClick={handleClickGoToShapeModel}
          />
        </BtnLayout>
      </RightSection>
      <LoadmapCard />
    </>
  );
};

Roadmap.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default Roadmap;
