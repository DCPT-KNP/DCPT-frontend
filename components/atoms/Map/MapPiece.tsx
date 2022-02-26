import { CSSProperties } from 'react';
import tw, { css } from 'twin.macro';

interface IMapPieceProps {
  styles: Record<keyof Pick<CSSProperties, 'backgroundColor'>, string>;
}
const Styles = ({ backgroundColor = '#ffffff' }: IMapPieceProps['styles']) =>
  css({
    backgroundColor
  });
const MapPiece = ({ styles }: IMapPieceProps) => {
  return <div css={[tw`relative h-full`, Styles({ ...styles })]}></div>;
};
export default MapPiece;
