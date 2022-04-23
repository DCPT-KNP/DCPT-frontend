// export type SelectionMapType = 'si' | 'bi' | 'st' | 'bt' | 'spi' | 'bpi';
type ShapeType = 'i' | 't' | 'pi';
type SizeType = 'short' | 'long';

export type SelectionMapType = {
  type: ShapeType;
  initIndex: number;
  box: SizeType[];
};

export const iShape: SelectionMapType = {
  type: 'i',
  initIndex: 3,
  box: [
    'short',
    'short',
    'short',
    'long',
    'short',
    'short',
    'short',
    'short',
    'short',
    'short',
    'short',
    'short',
    'short'
  ]
};
export const tShape: SelectionMapType = {
  type: 't',
  initIndex: 3,
  box: [
    'short',
    'short',
    'short',
    'long',
    'short',
    'short',
    'short',
    'short',
    'short',
    'short',
    'short',
    'short',
    'short'
  ]
};
export const piShape: SelectionMapType = {
  type: 'pi',
  initIndex: 2,
  box: [
    'short',
    'short',
    'long',
    'short',
    'long',
    'short',
    'short',
    'short',
    'short',
    'short',
    'short',
    'short'
  ]
};
