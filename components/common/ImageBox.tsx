import Image, { ImageProps } from 'next/image';
import { CSSProperties } from 'react';
import tw, { css, styled } from 'twin.macro';

interface IStylesProps {
  minWidth?: string;
  maxWidth?: string;
  height?: CSSProperties['height'];
}

interface IImageBoxProps extends ImageProps {
  styles?: IStylesProps;
  alt: string;
}

const Box = styled.div([
  tw`flex justify-center`,
  ({ minWidth, maxWidth, height }: IStylesProps) => css({ minWidth, maxWidth, height })
]);

const ImageBox = ({ styles, alt, ...rest }: IImageBoxProps) => {
  return (
    <Box {...styles}>
      <Image {...rest} alt={alt} />
    </Box>
  );
};

export default ImageBox;
