import Image, { ImageProps } from 'next/image';
import tw, { css, styled } from 'twin.macro';

interface IStylesProps {
  minWidth?: string;
  maxWidth?: string;
}

interface IImageBoxProps extends ImageProps {
  styles?: IStylesProps;
  alt: string;
}

const Box = styled.div([
  tw`flex justify-center`,
  ({ minWidth, maxWidth }: IStylesProps) => css({ minWidth, maxWidth })
]);

const ImageBox = ({ styles, alt, ...rest }: IImageBoxProps) => {
  return (
    <Box {...styles}>
      <Image {...rest} alt={alt} />
    </Box>
  );
};

export default ImageBox;
