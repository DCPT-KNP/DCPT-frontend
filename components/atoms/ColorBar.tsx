import { CSSProperties } from 'react';
import 'twin.macro';
import tw, { css } from 'twin.macro';

interface IColorBarProps {
  color: string;
  width?: CSSProperties['width'];
  height?: CSSProperties['height'];
  margin?: CSSProperties['margin'];
}
// 부모의 높이가 지정되어 있어야 height 적용된다.
const BarStyles = ({
  color,
  width = '4px',
  height = 'auto',
  margin = '2px 6px 2px 0'
}: IColorBarProps) =>
  css({
    background: color,
    width,
    height,
    margin
  });

const Bar = tw.span``;
const ColorBar = (props: IColorBarProps) => {
  return <Bar css={[BarStyles(props)]} />;
};

export default ColorBar;
