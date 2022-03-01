import { cardList } from '@/metadata/shape-model';
import { useRouter } from 'next/router';
import { useMemo } from 'react';
import tw from 'twin.macro';
import HeaderLayout from './HeaderLayout';

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout = tw.div`flex px-16 py-32 max-h-screen`;

const MainLayout = ({ children }: ILayoutProps) => {
  const { query } = useRouter();
  const navbar = useMemo(() => {
    return !!cardList.find((card) => card.type === query?.type);
  }, [query]);
  return (
    <>
      <HeaderLayout navbar={navbar} />
      <Layout>{children}</Layout>
    </>
  );
};

export default MainLayout;
