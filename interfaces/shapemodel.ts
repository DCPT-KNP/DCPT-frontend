export interface IShapeModelCard {
  type: 'i' | 't' | 'pi';
  src: StaticImageData;
  title: string;
  desc: string;
  selected: boolean;
}
