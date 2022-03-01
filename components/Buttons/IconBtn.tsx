import tw from 'twin.macro';
import kakao from '@/img/icons/kakao.png';
import naver from '@/img/icons/naver.png';
import google from '@/img/icons/google.png';
import Image from 'next/image';
import axios from 'axios';
import { KAKAO_AUTH_URL } from 'constants/social';
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
      <a href={KAKAO_AUTH_URL}>
        <IconImg src={imageUrl} alt={name} width={72} height={72} />
      </a>
    </IconBtnBlock>
  );
};

export const KakaoIconBtn = () => {
  const kakaoLogin = async () => {
    try {
      const result = await axios.get(`${KAKAO_AUTH_URL}`);
      console.log(result);
    } catch (error) {
      console.log('error', error);
    }
  };
  return <IconBtn imageUrl={kakao} name="카카오" />;
};

export const NaverIconBtn = () => {
  return <IconBtn imageUrl={naver} name="네이버" />;
};

export const GoogleIconBtn = () => {
  return <IconBtn imageUrl={google} name="구글" />;
};
