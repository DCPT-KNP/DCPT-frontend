import { IShapeModelCard } from '@/interfaces/shapemodel';
import { SelectionMapType } from '@/metadata/selection-map';
import { CSSInterpolation } from '@emotion/css';
import { useCallback, useMemo } from 'react';
import tw, { css } from 'twin.macro';
import {
  getGridArea,
  getIconBySize,
  getSelectedMapCSS,
  getSelectedMapData,
  getShapeType
} from 'utils/selectionMapUtils';

interface ISelectionMapProps {
  type: IShapeModelCard['type'];
  skillIndex: number[];
  selectedSkillsByKey: { index: number; key: string }[];
  selectedSkills: { index: number; key: string }[];
}

const ItemStyles = ({
  gridArea,
  chooseImg
}: {
  gridArea: string;
  chooseImg?: object & CSSInterpolation;
}) => css({ gridArea, ...chooseImg });

const SelectionBox = tw.div`w-full h-[40vw]`;
const Card = tw.div`border border-[#E9E9E9] w-full h-full grid grid-cols-[repeat(7,minmax(75px, 10vw))] grid-rows-[1fr 4fr] `;
const Item = tw.div`w-full border min-h-[75px] relative`;

const SelectionMap = ({
  type,
  skillIndex,
  selectedSkills,
  selectedSkillsByKey
}: ISelectionMapProps) => {
  const shapeType = useMemo(() => getShapeType(type), [type]);
  const getItemCSS = useCallback(
    (index: number, size: SelectionMapType['box'][number]) => {
      if (selectedSkills.length > 0) {
        const selectedMapData = getSelectedMapData(selectedSkills);
        const selectedMapCSS = getSelectedMapCSS(selectedMapData);
        let itemCSS;
        selectedSkills.map(({ index: skillIndex }, i) => {
          if (skillIndex === index) {
            itemCSS = selectedMapCSS[i];
          }
        });
        if (itemCSS) {
          return itemCSS;
        }
      }
      const findIndex = skillIndex?.findIndex(
        (v) => selectedSkillsByKey?.[selectedSkillsByKey?.length - 1]?.index === v
      );
      if (findIndex < 0 && skillIndex[0] === index) {
        return getIconBySize(size);
      }
      if (skillIndex?.[findIndex] === index) {
        const selectedMapData = getSelectedMapData(selectedSkillsByKey);
        const selectedMapCSS = getSelectedMapCSS(selectedMapData);
        return selectedMapCSS[0];
      }
      if (skillIndex?.[findIndex + 1] === index) {
        return getIconBySize(size);
      }
    },
    [selectedSkillsByKey, skillIndex, selectedSkills]
  );
  return (
    <SelectionBox>
      <Card>
        {shapeType?.box.map((size, index) => {
          return (
            <Item
              key={`${type}_${index}`}
              css={[
                ItemStyles({
                  gridArea: getGridArea(type, index),
                  chooseImg: getItemCSS(index, size)
                })
              ]}
            ></Item>
          );
        })}
      </Card>
    </SelectionBox>
  );
};
export default SelectionMap;
