import tw from 'twin.macro';
import HeaderLayout from './HeaderLayout';

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout = tw.div`flex px-16 py-32`;

const MainLayout = ({ children }: ILayoutProps) => {
  return (
    <>
      <HeaderLayout />
      <Layout>{children}</Layout>
    </>
  );
};

export default MainLayout;
