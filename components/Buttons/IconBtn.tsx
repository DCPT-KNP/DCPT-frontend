import tw from 'twin.macro';
import kakao from '@/img/icons/kakao.png';
import naver from '@/img/icons/naver.png';
import google from '@/img/icons/google.png';
import Image from 'next/image';
import axios from 'axios';
import { KAKAO_AUTH_URL } from 'constants/social';
import { BASE_URL } from 'constants/config';
interface IIconBtnProps {
  imageUrl: any;
  name: string;
  onClick?: () => void;
}

const IconBtnBlock = tw.button`
    w-[72px] h-[72px]
`;

const IconImg = tw(Image)`rounded-full`;

const IconBtn = ({ imageUrl, name, onClick }: IIconBtnProps) => {
  return (
    <IconBtnBlock onClick={onClick}>
      <IconImg src={imageUrl} alt={name} width={72} height={72} onClick={onClick} />
    </IconBtnBlock>
  );
};

export const KakaoIconBtn = () => {
  const { Kakao }: any = window;
  const kakaoLogin = async () => {
    try {
      console.log('hi');
      //   const result = await axios.get(`${BASE_URL}/api/auth/kakao`);
      Kakao.Auth.authorize({
        redirectUri: 'http://localhost:3000'
      });
    } catch (error) {
      console.log('error', error);
    }
  };
  return <IconBtn imageUrl={kakao} name="카카오" onClick={() => kakaoLogin()} />;
};

export const NaverIconBtn = () => {
  return <IconBtn imageUrl={naver} name="네이버" />;
};

export const GoogleIconBtn = () => {
  return <IconBtn imageUrl={google} name="구글" />;
};
