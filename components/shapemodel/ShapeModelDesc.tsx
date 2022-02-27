import tw from 'twin.macro';
import { Body1 } from '../../styles/typography';

const DescLayout = tw.div`mb-10 flex flex-col`;
const Desc = tw.div``;
const DP = tw(Body1)`text-[#666666] text-[18px]`;

const ShapeModelDesc = () => {
  return (
    <DescLayout>
      <Desc>
        <DP>
          원하는 Career Shape Model을 골라보세요.
          <br />
          Career Shape Model 선택 시,
          <br />
          해당 Model에 따라 나에게 맞는 세부 커리어 방향을 설계할 수 있습니다.
        </DP>
      </Desc>
    </DescLayout>
  );
};

export default ShapeModelDesc;
