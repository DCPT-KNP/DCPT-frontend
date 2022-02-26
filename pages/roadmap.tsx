import Router from 'next/router';
import tw from 'twin.macro';
import Btn from '../components/atoms/Buttons/Btn';
import PageTitle from '../components/atoms/IndexPage/PageTitle';
import MainLayout from '../components/layout/MainLayout';
import LoadmapCard from '../components/roadmap/RoadmapCard';
import RoadmapDesc from '../components/roadmap/RoadmapDesc';
import { IRoadMapCard } from '../interface/roadmap';
import Step1 from '../public/img/roadmap_step1.png';
import Step2 from '../public/img/roadmap_step2.png';
import Step3 from '../public/img/roadmap_step3.png';
import Step4 from '../public/img/roadmap_step4.png';

const RightSection = tw.section`flex flex-col pr-16`;
const BtnLayout = tw.div`flex items-end h-full`;

const Roadmap = () => {
  const cardList: IRoadMapCard[] = [
    {
      src: Step1,
      alt: 'roadmap step1',
      title: 'Step 01',
      desc: '나에게 맞는 Career Model을 선택하면 해당 Model에 맞춰 세부 커리어 방향을 설계할 수 있습니다.'
    },
    {
      src: Step2,
      alt: 'roadmap step2',
      title: 'Step 02',
      desc: '전문성을 가지고 가장 집중적으로 발전시킬 Primary 역량을 선택합니다. *π형 모델 선택 시 Secondary 역량을 추가 선택합니다.'
    },
    {
      src: Step3,
      alt: 'roadmap step3',
      title: 'Step 03',
      desc: 'Primary 역량에 비해 깊이는 낮으나 추가적으로 함께 발전시키고 싶은 역량을 선택합니다. *I형 모델 선택 시 해당 단계는 건너뜁니다.'
    },
    {
      src: Step4,
      alt: 'roadmap step4',
      title: 'Step 04',
      desc: '직접 제작한 커리어 로드맵 결과를 확인 후 공유 또는 저장합니다. 로그인 시 커리어 로드맵 별 세부 역량 및 Tip을 확인할 수 있습니다.'
    }
  ];
  const handleClickGoToShapeModel = () => {
    Router.push('/shapemodel');
  };
  return (
    <MainLayout>
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
      <LoadmapCard cardList={cardList} />
    </MainLayout>
  );
};

export default Roadmap;
