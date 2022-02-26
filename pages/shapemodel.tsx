import { SyntheticEvent } from 'react';
import { useState } from 'react';
import tw from 'twin.macro';
import Btn from '../components/atoms/Buttons/Btn';
import PageTitle from '../components/atoms/IndexPage/PageTitle';
import ImageBox from '../components/common/ImageBox';
import MainLayout from '../components/layout/MainLayout';
import ShapeModelCard from '../components/shapemodel/ShapeModelCard';
import ShapeModelDesc from '../components/shapemodel/ShapeModelDesc';
import { IShapeModelCard } from '../interface/shapemodel';
import Choose from '../public/img/choose.png';
import IShape from '../public/img/i_shape.png';
import PIShape from '../public/img/pi_shape.png';
import TShape from '../public/img/t_shape.png';

const LeftSection = tw.section`flex flex-col pr-16`;
const RightSection = tw.section`flex flex-col gap-16`;
const BtnLayout = tw.div`w-min place-self-end`;

const ShapeModel = () => {
  const cardList: IShapeModelCard[] = [
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

  const [selectedCard, setSelectedCard] = useState<
    IShapeModelCard['type'] | undefined
  >();
  const handleClickCard = (
    e: SyntheticEvent<HTMLButtonElement>,
    type: IShapeModelCard['type']
  ) => {
    setSelectedCard(() => type);
  };
  return (
    <MainLayout>
      <LeftSection>
        <PageTitle firstDesc="Choose your" secondDesc="Career Shape Model" />
        <ShapeModelDesc />
        <ImageBox styles={{ minWidth: '240px' }} src={Choose} alt={'choose'} />
      </LeftSection>
      <RightSection>
        <ShapeModelCard
          cardList={cardList}
          selectedCard={selectedCard}
          handleClickCard={handleClickCard}
        />
        <BtnLayout>
          <Btn
            disabled={!selectedCard}
            styles={{ size: '20', bgColor: '#1A1A1A', color: '#FFFFFF' }}
            name="Next"
          />
        </BtnLayout>
      </RightSection>
    </MainLayout>
  );
};

export default ShapeModel;
