import Logo from '@/img/icons/logo.svg';
import { useRouter } from 'next/router';
import tw from 'twin.macro';
import NavBar from '../common/NavBar';

interface IHeaderLayoutProps {
  navbar: boolean;
}

const Header = tw.header`sticky flex flex-col top-0 px-16 shadow-[0px 10px 30px #F0F0F0] bg-white z-10`;
const LogoBtn = tw.button`w-max`;

const HeaderLayout = ({ navbar = false }: IHeaderLayoutProps) => {
  const router = useRouter();
  const handleClickGoToHome = () => {
    router.push('/');
  };
  return (
    <Header>
      <LogoBtn onClick={handleClickGoToHome}>
        <Logo />
      </LogoBtn>
      {navbar && <NavBar />}
    </Header>
  );
};

export default HeaderLayout;
