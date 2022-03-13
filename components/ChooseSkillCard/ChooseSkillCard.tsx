import { Body2 } from '@/styles/typography';
import { HTMLAttributes } from 'react';
import tw from 'twin.macro';
import ColorBar from '../atoms/ColorBar';
import SkillTitle from '../Skill/SkillTitle';

interface IChooseSkillCard extends HTMLAttributes<HTMLButtonElement> {
  title: string;
  content: string;
  color: string;
}

const Card = tw.button`flex flex-col gap-3 min-w-[200px] w-max border-solid border-[#E9E9E9] border-[1px] p-6 hover:border-[#1A1A1A]`;
const Top = tw.div`flex`;
const Bottom = tw.div``;
const Content = tw(Body2)`text-gray-500`;

const ChooseSkillCard = ({ title, color, content, ...rest }: IChooseSkillCard) => {
  return (
    <Card {...rest}>
      <Top>
        <ColorBar width={'6px'} color={color} />
        <SkillTitle title={title} fontWeight={'bold'} />
      </Top>
      <Bottom>
        <Content>{content}</Content>
      </Bottom>
    </Card>
  );
};

export default ChooseSkillCard;
