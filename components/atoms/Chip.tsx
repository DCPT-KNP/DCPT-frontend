import { css } from '@emotion/react';
import tw from 'twin.macro';
interface IStylesProps {
  bgColor?: string;
  color?: string;
  fontSize: string;
  fontWeight: number;
  padding: string;
}
interface IChipsProps {
  content: number | string;
  styles: IStylesProps;
}
const Styles = ({
  bgColor = '#000000',
  color = '#ffffff',
  fontSize,
  padding,
  fontWeight
}: IStylesProps) =>
  css`
    background-color: ${bgColor};
    color: ${color};
    font-size: ${fontSize};
    font-weight: ${fontWeight};
    padding: ${padding};
  `;
const Chip = ({ content, styles }: IChipsProps) => {
  return (
    <div
      css={[
        tw`inline-block flex-shrink-0 rounded-[8px] font-medium place-self-start`,
        Styles({ ...styles })
      ]}
    >
      {content}
    </div>
  );
};

export default Chip;
