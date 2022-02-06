import 'twin.macro';
import tw, { css } from 'twin.macro';

interface IColorBarProps {
  color: string;
  width?: string;
  height?: string;
  margin?: string;
}
// 부모의 높이가 지정되어 있어야 height 적용된다.
const BarStyles = ({
  color,
  width = '4px',
  height = 'auto',
  margin = '2px 6px 2px 0'
}: IColorBarProps) =>
  css`background-color : ${color};
        width : ${width};
        height : ${height};
        margin : ${margin}};
  `;
const ColorBar = (props: IColorBarProps) => {
  return <span css={[tw`inline-block`, BarStyles(props)]}></span>;
};

export default ColorBar;
