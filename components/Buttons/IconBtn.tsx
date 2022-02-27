import tw from 'twin.macro';
import kakao from '@/img/icons/kakao.png';
import naver from '@/img/icons/naver.png';
import google from '@/img/icons/google.png';
import Image from 'next/image';

interface IIconBtnProps {
  imageUrl: any;
  name: string;
}

const IconBtnBlock = tw.button`
    w-[72px] h-[72px]
`;

const IconImg = tw(Image)`rounded-full`;

const IconBtn = ({ imageUrl, name }: IIconBtnProps) => {
  return (
    <IconBtnBlock>
      <IconImg src={imageUrl} alt={name} width={72} height={72} />
    </IconBtnBlock>
  );
};

export const KakaoIconBtn = () => {
  return <IconBtn imageUrl={kakao} name="카카오" />;
};

export const NaverIconBtn = () => {
  return <IconBtn imageUrl={naver} name="네이버" />;
};

export const GoogleIconBtn = () => {
  return <IconBtn imageUrl={google} name="구글" />;
};
