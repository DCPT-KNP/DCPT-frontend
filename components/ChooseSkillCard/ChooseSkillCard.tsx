import { Body2 } from '@/styles/typography';
import { HTMLAttributes } from 'react';
import tw, { css } from 'twin.macro';
import ColorBar from '../atoms/ColorBar';
import SkillTitle from '../Skill/SkillTitle';

interface IChooseSkillCard extends HTMLAttributes<HTMLButtonElement> {
  title: string;
  content: string;
  color: string;
  disabled: boolean;
  isSelected: boolean;
}

const CardSteyls = ({ isSelected }) =>
  css({ borderColor: isSelected ? '#1A1A1A' : '#E9E9E9' });

const Card = tw.button`border-solid max-w-[383px] border-[1px] p-6 disabled:opacity-30 disabled:hover:border-[#E9E9E9]`;
const Top = tw.div`flex`;
const Bottom = tw.div``;
const Content = tw(Body2)`text-left text-gray-500`;

const ChooseSkillCard = ({
  title,
  color,
  content,
  disabled,
  isSelected,
  ...rest
}: IChooseSkillCard) => {
  return (
    <Card css={[CardSteyls({ isSelected })]} disabled={disabled} {...rest}>
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
