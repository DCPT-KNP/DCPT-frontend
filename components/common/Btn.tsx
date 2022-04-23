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
}

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  name?: string;
  arrow?: 'left' | 'right';
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
}: IButtonProps['styles'] & { disabled: IButtonProps['disabled'] }) =>
  css({
    backgroundColor: disabled ? '#BDBDBD' : `${bgColor}`,
    fontSize: `${size}`,
    color: `${color}`,
    padding: `${padding}`,
    border: `${border}`,
    textAlign: `${textAlign}`,
    margin: `${margin}`,
    width: 'fit-content'
  });

const Btn = ({ name, disabled, styles, arrow, ...rest }: IButtonProps) => {
  return (
    <button
      disabled={disabled}
      css={[tw`flex items-center font-bold`, ButtonStyles({ disabled, ...styles })]}
      {...rest}
    >
      {arrow === 'left' && (
        <Arrow css={[css({ fill: styles.color })]} className={'mr-4 rotate-180'} />
      )}
      <span>{name}</span>
      {arrow === 'right' && (
        <Arrow css={[css({ fill: styles.color })]} className={'ml-4'} />
      )}
    </button>
  );
};

export default Btn;
