import styled from '@emotion/styled';
import { SyntheticEvent } from 'react';
import tw from 'twin.macro';
import { IShapeModelCard } from '../../interface/shapemodel';
import ImageBox from '../common/ImageBox';

type SelectedCardType = {
  selected: boolean;
};

interface IShapeModelProps {
  cardList: IShapeModelCard[];
  selectedCard: IShapeModelCard['type'] | undefined;
  handleClickCard: (
    e: SyntheticEvent<HTMLButtonElement>,
    type: IShapeModelCard['type']
  ) => void;
}

const CardList = tw.div`flex flex-col flex-basis[100%] gap-4`;
const Card = styled.button([
  tw`flex p-6 text-left border-2`,
  ({ selected }: SelectedCardType) => selected && tw`border-[#000000]`
]);
const CardInfoBox = tw.div`flex flex-col py-2 ml-[2rem]`;
const Title = tw.p`font-bold text-[1.4rem] mb-[0.8rem]`;
const Desc = tw.p`font-medium text-[1.2rem] text-[#999999]`;

const ShapeModelCard = ({
  cardList,
  selectedCard,
  handleClickCard
}: IShapeModelProps) => {
  return (
    <CardList>
      {cardList?.map(({ src, title, desc, type }) => (
        <Card
          key={type}
          onClick={(e) => handleClickCard(e, type)}
          selected={type === selectedCard}
        >
          <ImageBox styles={{ minWidth: '240px' }} src={src} alt={title} />
          <CardInfoBox>
            <Title>{title}</Title>
            <Desc>{desc}</Desc>
          </CardInfoBox>
        </Card>
      ))}
    </CardList>
  );
};

export default ShapeModelCard;
