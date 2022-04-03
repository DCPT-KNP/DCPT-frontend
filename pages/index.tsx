import PageTitle from '@/components/atoms/IndexPage/PageTitle';
import LoginBtn from '@/components/Buttons/LoginBtn';
import Btn from '@/components/common/Btn';
import MainLayout from '@/components/layout/MainLayout';
import IndexDesc from '@/components/molecules/IndexDesc';
import graphicImage from '@/img/Graphic.png';
import { useMediaQuery } from '@chakra-ui/react';
import useAppContext from 'contexts/App/index';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { ReactElement, useLayoutEffect } from 'react';
import tw from 'twin.macro';

const RightSection = tw.section`flex flex-col pr-16 py-[104px]`;
const BtnLayout = tw.div`flex items-end h-full`;
const LeftSection = tw.section`flex py-[104px]`;

const IndexPage = () => {
  const router = useRouter();
  const { store } = useAppContext();
  const [isDeskTop] = useMediaQuery('(min-width: 1024px)');

  useLayoutEffect(() => {
    console.log(router.query);
  }, [router.query]);

  const handleClickGoToRoadmap = () => {
    router.push('/roadmap');
  };
  return (
    <div css={tw`flex justify-between w-full`}>
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
          <LoginBtn />
        </BtnLayout>
      </RightSection>
      <LeftSection>
        {isDeskTop && (
          <Image src={graphicImage} alt="graphic image" width="920px" height="760px" />
        )}
      </LeftSection>
    </div>
  );
};

IndexPage.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default IndexPage;
