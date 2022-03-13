import { Title2 } from '@/styles/typography';
import { css } from '@emotion/react';
import { CSSProperties, HTMLAttributes } from 'react';
import tw from 'twin.macro';

interface ISkillTitleProps {
  title: string;
  fontWeight: CSSProperties['fontWeight'];
}

const TitleStyles = ({ fontWeight }: Omit<ISkillTitleProps, 'title'>) =>
  css({ fontWeight });

const H1 = tw(Title2)``;
const SkillTitle = ({ title, fontWeight }: ISkillTitleProps) => {
  return <H1 css={[TitleStyles({ fontWeight })]}>{title}</H1>;
};

export default SkillTitle;
