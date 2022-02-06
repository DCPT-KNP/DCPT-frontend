import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import MissionCard from '../components/molecules/MissionCard';

const Home: NextPage = () => {
  return (
    <div>
      <MissionCard />
    </div>
  );
};

export default Home;
