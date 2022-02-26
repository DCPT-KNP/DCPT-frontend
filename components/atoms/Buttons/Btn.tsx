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
}

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  name: string;
  styles: IStylesProps;
}

const ButtonStyles = ({
  disabled,
  size,
  bgColor = '#ffffff',
  color = '#000000',
  padding = '1.2rem 4rem',
  border = 'none',
  textAlign = 'center',
  margin = '0 0 0 0 '
}: IStylesProps & { disabled: boolean | undefined }) =>
  css({
    backgroundColor: disabled ? '#BDBDBD' : `${bgColor}`,
    fontSize: `${size}`,
    color: `${color}`,
    padding: `${padding}`,
    border: `${border}`,
    textAlign: `${textAlign}`,
    margin: `${margin}`
  });

const Btn = ({ name, disabled, styles, ...rest }: IButtonProps) => {
  return (
    <button
      disabled={disabled}
      css={[tw`font-bold`, ButtonStyles({ disabled, ...styles })]}
      {...rest}
    >
      {name}
    </button>
  );
};

export default Btn;
