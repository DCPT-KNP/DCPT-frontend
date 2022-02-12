import { css } from '@emotion/react';
import tw from 'twin.macro';

interface IStylesProps {
  color: string;
  fontWeight: number;
}
interface ICategoryMenuTitleProps {
  title: string;
  styles: IStylesProps;
}

const Styles = ({ color, fontWeight }: IStylesProps) =>
  css`
    color: ${color};
    font-weight: ${fontWeight};
  `;
const Title = tw.h2`font-weight[700] text-[1.2rem]`;
const CategoryItemTitle = ({ title, styles }: ICategoryMenuTitleProps) => {
  return <Title css={Styles({ ...styles })}>{title}</Title>;
};

export default CategoryItemTitle;
