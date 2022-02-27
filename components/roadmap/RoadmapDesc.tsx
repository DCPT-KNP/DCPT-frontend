import tw from 'twin.macro';
import { Body1 } from '../../styles/typography';

const DescLayout = tw.div`mb-10 flex flex-col`;
const BoldDesc = tw.div`font-bold mb-8`;
const BoldP = tw(Body1)``;
const Desc = tw.div`font-medium`;
const DP = tw(Body1)`text-[#666666] text-[18px]`;

const RoadmapDesc = () => {
  return (
    <DescLayout>
      <BoldDesc>
        <BoldP>소요 시간 : 5분 - 10분</BoldP>
        <BoldP>진행 단계 : 3가지 - 5가지</BoldP>
      </BoldDesc>
      <Desc>
        <DP>
          커리어 로드맵이란,
          <br />
          디자이너로써 되고 싶은 모델 및 커리어 방향을 설계하는 프레임워크입니다. <br />
          3가지(I/T/π) 유형의 모델, 7가지의 주요 역량을 선택하여,
          <br />
          당신에게 맞는 IT Design Career Roadmap을 설계합니다.
        </DP>
      </Desc>
    </DescLayout>
  );
};

export default RoadmapDesc;
