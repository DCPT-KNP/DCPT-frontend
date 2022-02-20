import { ComponentPropsWithRef } from 'react';
import tw from 'twin.macro';

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout = tw.div`flex px-16 py-32`;

const MainLayout = ({ children }: ILayoutProps) => {
  return <Layout>{children}</Layout>;
};

export default MainLayout;
