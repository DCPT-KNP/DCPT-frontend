import tw from 'twin.macro';

interface ISkillNameProps {
  name: string;
}

const H1 = tw.h1`font-medium text-[14px]`;
const SkillName = ({ name }: ISkillNameProps) => {
  return <H1>{name}</H1>;
};

export default SkillName;
