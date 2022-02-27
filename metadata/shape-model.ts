import { IShapeModelCard } from '../interfaces/shapemodel';
import IShape from '@/img/i_shape.png';
import PIShape from '@/img/pi_shape.png';
import TShape from '@/img/t_shape.png';

export const cardList: IShapeModelCard[] = [
  {
    type: 'i',
    src: IShape,
    title: 'I-shaped Designer',
    desc: 'I자형 인재는 한가지 분야에 전문성을 가진 디자이너입니다. 일명‘Specialist’로 다른 분야에 대해 많이 알지 못하지만 특정 분야의 뛰어난 전문성을 가집니다.',
    selected: false
  },
  {
    type: 't',
    src: TShape,
    title: 'T-shaped Designer',
    desc: 'T자형 인재는 다양한 분야에 능하며 그 중 하나의 분야에 전문성을 가진 디자이너입니다. 기술의 깊이와 폭을 모두 가지고 있습니다.',
    selected: false
  },
  {
    type: 'pi',
    src: PIShape,
    title: 'π-shaped Designer',
    desc: 'π자형 인재는 다양한 분야에 능하며 그 중 인접한 2가지의 분야에 전문성을 가진 디자이너입니다. T자형 인재에서 전문성을 더한 형태로 떠오르는 인재형입니다.',
    selected: false
  }
];
