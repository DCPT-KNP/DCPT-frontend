import ColorBar from '../atoms/ColorBar';
import SkillTitle from '../atoms/SkillTitle';
import tw from 'twin.macro';
import SkillName from '../atoms/SkillName';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
interface ISkillCardProps {
  color: string;
  title: string;
  name: string;
  percentage: number;
}

const Card = tw.div`flex w-max border-solid border-[#E9E9E9] border-[1px] px-[1rem]`;
const LeftArticle = tw.div`flex flex-col gap-[8px] mr-[4rem] py-[16px]`;
const SkillTitleWrapper = tw.div`flex`;
const CircleProgressWrapper = tw.div`flex items-center w-[48px]`;
const SkillCard = ({ color, title, name, percentage }: ISkillCardProps) => {
  return (
    <Card>
      <LeftArticle>
        <SkillTitleWrapper>
          <ColorBar color={color} />
          <SkillTitle title={title} />
        </SkillTitleWrapper>
        <SkillName name={name} />
      </LeftArticle>
      {/* https://codesandbox.io/s/vymm4oln6y?file=/AnimatedProgressProvider.js */}
      <CircleProgressWrapper>
        <CircularProgressbar
          value={percentage}
          text={`${percentage}%`}
          strokeWidth={5}
          styles={buildStyles({
            textSize: '1.4rem',
            textColor: '#1A1A1A',
            pathColor: `${color}`,
            rotation: 0.25
          })}
        />
      </CircleProgressWrapper>
    </Card>
  );
};
export default SkillCard;
