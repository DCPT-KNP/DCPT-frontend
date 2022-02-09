import type { NextPage } from 'next';
import MissionCard from '../components/molecules/MissionCard';
import SkillCard from '../components/molecules/SkillCard';

const Home: NextPage = () => {
  return (
    <div>
      <MissionCard />
      <SkillCard color="red" title="UX Design" name="ETC Skill" percentage={80} />
      <SkillCard color="green" title="UX Design" name="ETC Skill" percentage={60} />
      <SkillCard color="blue" title="UX Design" name="ETC Skill" percentage={40} />
      <SkillCard color="red" title="UX Design" name="ETC Skill" percentage={20} />
    </div>
  );
};

export default Home;
