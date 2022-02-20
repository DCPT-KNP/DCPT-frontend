import tw from 'twin.macro';
import Btn from '../components/atoms/Buttons/Btn';

const MainLayout = tw.div`flex px-16 py-32 `;
const RightSection = tw.section`flex flex-col flex-grow`;
const BtnLayout = tw.div`flex items-center h-full`;

const Roadmap = () => {
  return (
    <MainLayout>
      <RightSection>
        <BtnLayout>
          <Btn
            styles={{ size: '20', bgColor: '#1A1A1A', color: '#FFFFFF' }}
            name="로드맵 제작"
          />
        </BtnLayout>
      </RightSection>
    </MainLayout>
  );
};

export default Roadmap;
