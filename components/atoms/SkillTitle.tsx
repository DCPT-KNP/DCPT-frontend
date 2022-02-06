import tw from 'twin.macro';

interface ISkillTitleProps {
  title: string;
}

const H1 = tw.h1`font-medium text-[14px]`;
const SkillTitle = ({ title }: ISkillTitleProps) => {
  return <H1>{title}</H1>;
};

export default SkillTitle;
