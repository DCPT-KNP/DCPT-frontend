import { IShapeModelCard } from '@/interfaces/shapemodel';
import { chooseSkillsMetaData, ChooseSkillType } from '@/metadata/choose-skills';
import { iShape, piShape, SelectionMapType, tShape } from '@/metadata/selection-map';
import { CSSInterpolation } from '@emotion/css';

export function getGridArea(type: IShapeModelCard['type'], index: number) {
  switch (type) {
    case 'i':
    case 't':
      return index === 3 ? '1/4/3' : 'auto';
    case 'pi':
      if (index === 2) {
        return '1/3/3';
      }
      if (index === 4) {
        return '1/5/3';
      }
      return 'auto';
    default:
      return 'auto';
  }
}

export function getShapeType(
  type: IShapeModelCard['type']
): SelectionMapType | undefined {
  switch (type) {
    case 'i':
      return iShape;
    case 't':
      return tShape;
    case 'pi':
      return piShape;
    default:
      return iShape;
  }
}
export const getSelectedMapData = (selectedMaps: { index: number; key: string }[]) => {
  const selectedSkills = selectedMaps.flatMap((mapKey) =>
    chooseSkillsMetaData.filter((skill) => skill.key === mapKey.key)
  );
  return selectedSkills;
};
export const getSelectedMapCSS = (
  selectedSkills: ChooseSkillType[]
): object & CSSInterpolation => {
  const cssInterpolation: CSSInterpolation = selectedSkills.map((skill) => {
    return {
      backgroundColor: skill.color,
      [':before']: {
        content: `"${skill.key.toUpperCase()}"`,
        color: 'white',
        fontWeight: 900,
        textAlign: 'center',
        position: 'absolute',
        left: '50%',
        fontSize: '1.4rem',
        bottom: '2%',
        transform: 'translateX(-50%)'
      }
    };
  });
  return cssInterpolation;
};
export function getIconBySize(
  size: SelectionMapType['box'][number]
): object & CSSInterpolation {
  return {
    [':before']: {
      content: '""',
      position: 'absolute',
      width: '100%',
      height: '100%',
      borderRight: '1px solid black',
      borderLeft: '1px solid black',
      background: `url(${
        size === 'long' ? '/img/model_choose.png' : '/img/model_choose_s.png'
      }) no-repeat center`,
      backgroundSize: 'cover'
    }
  };
}
