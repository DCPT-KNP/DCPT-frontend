import { css } from '@emotion/react';
import tw from 'twin.macro';

interface IStylesProps {
  color?: string;
  fontSize?: string;
  fontWeight?: number;
}
interface ICommonTitleProps {
  title: string;
  styles?: IStylesProps;
}

const Styles = ({ color, fontSize, fontWeight }: IStylesProps) =>
  css`
    color: ${color};
    font-size: ${fontSize};
    font-weight: ${fontWeight};
  `;
const Title = tw.span`text-[#000000] text-[1rem] font-medium`;
const CommonTitle = ({ title, styles }: ICommonTitleProps) => {
  return <Title css={Styles({ ...styles })}>{title}</Title>;
};

export default CommonTitle;
