import tw from 'twin.macro';

interface IAvatarProps {
  src: string;
}

const Img = tw.img`align-middle w-[10rem] h-[10rem] rounded-[50%] bg-[black]`;
const Avatar = ({ src }: IAvatarProps) => {
  return <Img src={src} alt={'avatar'} />;
};

export default Avatar;
