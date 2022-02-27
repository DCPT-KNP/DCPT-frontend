import Logo from '@/img/icons/logo.svg';
import { useRouter } from 'next/router';
import tw from 'twin.macro';

const Header = tw.header`sticky flex top-0 px-16 shadow-[0px 10px 30px #F0F0F0] bg-white z-10`;
const LogoBtn = tw.button``;

const HeaderLayout = () => {
  const router = useRouter();
  const handleClickGoToHome = () => {
    router.push('/');
  };
  return (
    <Header>
      <LogoBtn onClick={handleClickGoToHome}>
        <Logo src={Logo} alt={'logo'} />
      </LogoBtn>
    </Header>
  );
};

export default HeaderLayout;
