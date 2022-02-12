import type { NextPage } from 'next';
import CommonTitle from '../components/atoms/\bCommonTitle';
import CategoryItem from '../components/molecules/CategoryItem';
import MissionCard from '../components/molecules/MissionCard';
import MyInfoCard from '../components/molecules/MyInfoCard';
import SkillCard from '../components/molecules/SkillCard';
import StatusCard from '../components/molecules/StatusCard';
import TipsCard from '../components/molecules/TipsCard';

const Home: NextPage = () => {
  return (
    <div>
      <MissionCard />
      <SkillCard color="red" title="UX Design" name="ETC Skill" percentage={80} />
      <SkillCard color="green" title="UX Design" name="ETC Skill" percentage={60} />
      <SkillCard color="blue" title="UX Design" name="ETC Skill" percentage={40} />
      <SkillCard color="red" title="UX Design" name="ETC Skill" percentage={20} />
      <CategoryItem title={'All Skills'} number={24} selected={false} />
      <CategoryItem title={'UX Research'} number={18} selected={true} />
      <StatusCard title={'Not Started'} number={20} />
      <StatusCard title={'In Progress'} number={0} />
      <StatusCard title={'Done'} number={10} />
      <CommonTitle title={'Skills'} />
      <CommonTitle title={'My Career Roadmap'} />
      <MyInfoCard />
      <TipsCard
        content={
          '데이터 분석 능력을 기르기 위해선 Python과 SQL에 대한 이해도가 필요한 경우가 있기 때문에 두가지 개발 언어에 대한 학습을 한다면 광범위한 데이터 분석을 진행할 수 있을 것입니다.'
        }
      />
      <CommonTitle title={'Add My Missions'} />
      <CommonTitle title={'Add My Memo'} />
    </div>
  );
};

export default Home;
