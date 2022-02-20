import tw from 'twin.macro';
import IndexPageTitle from '../components/atoms/IndexPage/IndexTitle';
import IndexDescription from '../components/molecules/IndexDescription';
import Image from 'next/image';
import graphicImage from '../public/img/Graphic.png';
import Btn from '../components/atoms/Buttons/Btn';
import Link from 'next/link';

const MainLayout = tw.div`flex px-16 py-32`;
const RightSection = tw.section`flex flex-col flex-grow`;
const BtnLayout = tw.div`flex items-center h-full `;
const IndexPage = () => {
  return (
    <MainLayout>
      <RightSection>
        <IndexPageTitle title="Set your IT Design <br/> Career Roadmap" />
        <IndexDescription
          boldDescription="NerdIT는 IT를 사랑하는, IT밖에 모르니 디자인 Nerd들을 위한 플랫폼입니다."
          description="NerdIT는 개인에게 맞는 디자인 커리어 로드맵을 설계하여, <br/> IT 업계에 종사하는 디자인 너드들이 탄탄한 커리어를 쌓을 수 있도록 돕습니다. <br/> 디자이너로써 미래를 어떻게 설계해야할지 모른다면 NerdIT 해보세요! Let's NerdIT!"
        />
        <BtnLayout>
          <Link href="/roadmap" passHref>
            <Btn
              styles={{
                size: '20',
                border: '1px solid #1A1A1A',
                margin: '0 1.25rem 0 0 '
              }}
              name="비회원 시작"
            />
          </Link>
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
