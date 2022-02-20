import Image from 'next/image';
import { useRouter } from 'next/router';
import tw from 'twin.macro';
import Btn from '../components/atoms/Buttons/Btn';
import IndexPageTitle from '../components/atoms/IndexPage/IndexTitle';
import MainLayout from '../components/layout/MainLayout';
import IndexDesc from '../components/molecules/IndexDesc';
import graphicImage from '../public/img/Graphic.png';

const RightSection = tw.section`flex flex-col flex-grow`;
const BtnLayout = tw.div`flex items-center h-full `;
const IndexPage = () => {
  const router = useRouter();
  const handleClickGoToRoadmap = () => {
    router.push('/roadmap');
  };
  return (
    <MainLayout>
      <RightSection>
        <IndexPageTitle title="Set your IT Design <br/> Career Roadmap" />
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
    </MainLayout>
  );
};

export default IndexPage;
