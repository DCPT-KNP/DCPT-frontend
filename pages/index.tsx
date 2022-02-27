import Image from 'next/image';
import { useRouter } from 'next/router';
import { ReactElement } from 'react';
import tw from 'twin.macro';
import PageTitle from '../components/atoms/IndexPage/PageTitle';
import Btn from '../components/Btn';
import MainLayout from '../components/layout/MainLayout';
import IndexDesc from '../components/molecules/IndexDesc';
import graphicImage from '../public/img/Graphic.png';

const RightSection = tw.section`flex flex-col pr-16`;
const BtnLayout = tw.div`flex items-end h-full`;

const IndexPage = () => {
  const router = useRouter();
  const handleClickGoToRoadmap = () => {
    router.push('/roadmap');
  };
  return (
    <>
      <RightSection>
        <PageTitle firstDesc="Set your IT Design" secondDesc="Career Roadmap" />
        <IndexDesc />
        <BtnLayout>
          <Btn
            styles={{
              size: '20',
              border: '1px solid #1A1A1A',
              margin: '0 1.25rem 0 0 '
            }}
            name="비회원 시작"
            onClick={handleClickGoToRoadmap}
          />
          <Btn
            styles={{ size: '20', bgColor: '#1A1A1A', color: '#FFFFFF' }}
            name="로그인"
          />
        </BtnLayout>
      </RightSection>
      <Image src={graphicImage} alt="graphic image" width="920px" height="760px" />
    </>
  );
};

IndexPage.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default IndexPage;
