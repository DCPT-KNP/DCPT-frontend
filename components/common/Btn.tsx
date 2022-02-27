import Arrow from '@/img/icons/arrow.svg';
import { ButtonHTMLAttributes } from 'react';
import tw, { css } from 'twin.macro';

interface IStylesProps {
  size: string;
  bgColor?: string;
  color?: string;
  padding?: string;
  border?: string;
  textAlign?: 'left' | 'center' | 'right';
  margin?: string;
  onClick?: () => void;
}

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  name: string;
  arrow?: boolean;
  styles: IStylesProps;
}

const ButtonStyles = ({
  size,
  bgColor = '#ffffff',
  color = '#000000',
  padding = '1.2rem 4rem',
  border = 'none',
  textAlign = 'center',
  margin = '0 0 0 0 '
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

const Btn = ({ name, disabled, styles, arrow = false, ...rest }: IButtonProps) => {
  return (
    <button css={[tw`flex items-center font-bold`, ButtonStyles(styles)]} {...rest}>
      <span>{name}</span>
      {arrow && <Arrow className={'ml-4'} />}
    </button>
  );
};

export default Btn;
