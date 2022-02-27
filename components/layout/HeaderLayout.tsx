import Logo from '@/img/icons/logo.svg';
import tw from 'twin.macro';

const Header = tw.header`sticky flex top-0 px-16 shadow-[0px 10px 30px #F0F0F0] bg-white z-10`;
const LogoBox = tw.div``;

const HeaderLayout = () => {
  return (
    <Header>
      <LogoBox>
        <Logo src={Logo} alt={'logo'} />
      </LogoBox>
    </Header>
  );
};

export default HeaderLayout;
