import type { NextPage } from 'next';
import MissionCard from '../components/molecules/MissionCard';
import SkillCard from '../components/molecules/SkillCard';

const Home: NextPage = () => {
  return (
    <div>
      <MissionCard />
      <SkillCard color="red" title="UX Design" />
    </div>
  );
};

export default Home;
