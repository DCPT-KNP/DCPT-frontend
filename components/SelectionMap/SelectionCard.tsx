import { SelectionMapType } from '@/metadata/selection-map';
import { HTMLAttributes } from 'react';
import tw, { css } from 'twin.macro';
import ImageBox from '../common/ImageBox';

interface ISelectionCardProps extends HTMLAttributes<HTMLButtonElement> {
  data: SelectionMapType[];
}

const ItemStyles = ({ gridArea }: { gridArea: string }) =>
  css({
    gridArea
  });

const Card = tw.div`border border-[#E9E9E9] grid grid-cols-[repeat(7,minmax(75px, auto))] grid-rows-[1fr 4fr] `;
const Item = tw.div`w-full min-h-[75px]`;

const SelectionCard = (props: ISelectionCardProps) => {
  console.log(props);
  return (
    <Card>
      {props.data.map((type, index) => {
        console.log(type);
        const gridArea = type === 'i' && index === 3 ? '1/4/3' : 'auto';
        return <Item css={[ItemStyles({ gridArea })]} key={`${type}_${index}`}></Item>;
      })}
    </Card>
  );
};

export default SelectionCard;
