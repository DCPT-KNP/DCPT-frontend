import { IShapeModelCard } from '@/interfaces/shapemodel';

export type NavListMetaDataType = {
  key: string;
  navTitle: string;
  containTypes: IShapeModelCard['type'][];
  current: boolean;
};

export const navList: NavListMetaDataType[] = [
  {
    key: 'shape_model',
    navTitle: 'Shape Model',
    containTypes: ['i', 'pi', 't'],
    current: true
  },
  {
    key: 'primary_skill',
    navTitle: 'Primary Skill',
    containTypes: ['i', 't', 'pi'],
    current: false
  },
  {
    key: 'secondary_skill',
    navTitle: 'Secondary Skill',
    containTypes: ['pi'],
    current: false
  },
  {
    key: 'etc_skill',
    navTitle: 'ETC Skill',
    containTypes: ['pi', 't'],
    current: false
  },
  {
    key: 'final',
    navTitle: 'Final Model',
    containTypes: ['i', 't', 'pi'],
    current: false
  }
];
