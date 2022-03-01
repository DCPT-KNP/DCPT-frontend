import { IShapeModelCard } from '@/interfaces/shapemodel';

export type NavListMetaDataType = {
  key: string;
  navTitle: string;
  containTypes: IShapeModelCard['type'][];
};

export const navList: NavListMetaDataType[] = [
  {
    key: 'shape_model',
    navTitle: 'Shape Model',
    containTypes: ['i', 'pi', 't']
  },
  {
    key: 'primary_skill',
    navTitle: 'Primary Skill',
    containTypes: ['i', 't', 'pi']
  },
  {
    key: 'secondary_skill',
    navTitle: 'Secondary Skill',
    containTypes: ['pi']
  },
  {
    key: 'etc_skill',
    navTitle: 'ETC Skill',
    containTypes: ['pi', 't']
  },
  {
    key: 'final_model',
    navTitle: 'Final Model',
    containTypes: ['i', 't', 'pi']
  }
];
