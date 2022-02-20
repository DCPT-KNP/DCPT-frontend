import tw, { css } from 'twin.macro';

interface IStylesProps {
  size: string;
  bgColor?: string;
  color?: string;
  padding?: string;
  border?: string;
  textAlign?: 'left' | 'center' | 'right';
  margin?: string;
}

interface IButtonProps {
  name: string;
  styles: IStylesProps;
}

const ButtonStyles = ({
  size,
  bgColor = '#ffffff',
  color = '#000000',
  padding = '1.2rem 4rem',
  border = 'none',
  textAlign = 'center',
  margin
}: IStylesProps) =>
  css({
    backgroundColor: `${bgColor}`,
    fontSize: `${size}`,
    color: `${color}`,
    padding: `${padding}`,
    border: `${border}`,
    textAlign: `${textAlign}`,
    margin: `${margin}`
  });

const Btn = ({ name, styles }: IButtonProps) => {
  return <button css={[tw`font-bold`, ButtonStyles(styles)]}>{name}</button>;
};

export default Btn;
