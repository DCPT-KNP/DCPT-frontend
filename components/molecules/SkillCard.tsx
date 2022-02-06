import ColorBar from '../atoms/ColorBar';
import SkillTitle from '../atoms/SkillTitle';
import tw from 'twin.macro';

interface ISkillCardProps {
  color: string;
  title: string;
}

const FlexBox = tw.div`flex`;

const SkillCard = ({ color, title }: ISkillCardProps) => {
  return (
    <FlexBox>
      <ColorBar color={color} />
      <SkillTitle title={title} />
    </FlexBox>
  );
};
export default SkillCard;
