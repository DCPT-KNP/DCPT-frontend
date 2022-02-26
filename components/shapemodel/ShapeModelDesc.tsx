import tw from 'twin.macro';

const DescLayout = tw.div`mb-10 flex flex-col`;
const P = tw.p`text-gray-600`;
const Desc = tw.div``;

const ShapeModelDesc = () => {
  return (
    <DescLayout>
      <Desc>
        <P>
          원하는 Career Shape Model을 골라보세요.
          <br />
          Career Shape Model 선택 시,
          <br />
          해당 Model에 따라 나에게 맞는 세부 커리어 방향을 설계할 수 있습니다.
        </P>
      </Desc>
    </DescLayout>
  );
};

export default ShapeModelDesc;
