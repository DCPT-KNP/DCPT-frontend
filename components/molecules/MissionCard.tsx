import tw from 'twin.macro';
import MissionEmoji from '../atoms/MissionEmoji';
import MissionTitle from '../atoms/MIssionTitle';
import MissionDescription from '../atoms/MissionDescription';
import ColorBar from '../atoms/ColorBar';
import SkillTitle from '../atoms/SkillTitle';

const MissionCardWrapper = tw.div`card md:flex-col max-w-sm p-6`;
const MissionTitleWrapper = tw.div`flex items-center md:text-left mb-2`;
const MissionStatusWrapper = tw.div`flex justify-between items-center md:text-left mb-4`;
const MissionOptionWrapper = tw.div`flex`;
const MissionCard = () => {
  return (
    <MissionCardWrapper>
      <MissionTitleWrapper>
        <MissionEmoji emoji={'🐙'} />
        <MissionTitle title={'데이터 분석 능력'} />
      </MissionTitleWrapper>
      <MissionDescription
        description={
          ' 사용자의 데이터를 기반으로 다양한 정량/정성적인 접근 방식을 활용하여 유의미한 인사이트를 도출합니다.'
        }
      />
      <MissionStatusWrapper>
        <MissionOptionWrapper>
          <ColorBar color={'red'} />
          <SkillTitle title={'UX Design'} />
        </MissionOptionWrapper>
        <button className="text-[12px] text-gray-500">Add your Mission</button>
      </MissionStatusWrapper>
      <progress className="progress ~neutral" value="75" max="100">
        75%
      </progress>
    </MissionCardWrapper>
  );
};

export default MissionCard;
