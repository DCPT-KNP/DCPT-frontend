import PageTitle from '@/components/atoms/IndexPage/PageTitle';
import Btn from '@/components/Btn';
import ImageBox from '@/components/common/ImageBox';
import MainLayout from '@/components/layout/MainLayout';
import ShapeModelCard from '@/components/shapemodel/ShapeModelCard';
import ShapeModelDesc from '@/components/shapemodel/ShapeModelDesc';
import Choose from '@/img/choose.png';
import I from '@/img/i.png';
import Pi from '@/img/pi.png';
import T from '@/img/t.png';
import { IShapeModelCard } from '@/interfaces/shapemodel';
import { cardList } from '@/metadata/shape-model';
import { useRouter } from 'next/router';
import { ReactElement, SyntheticEvent, useMemo, useState } from 'react';
import tw from 'twin.macro';

const LeftSection = tw.section`flex flex-col pr-16`;
const RightSection = tw.section`flex flex-col gap-16`;
const BtnLayout = tw.div`w-min place-self-end`;

const ShapeModel = () => {
  const [selectedCard, setSelectedCard] = useState<
    IShapeModelCard['type'] | undefined
  >();
  const handleClickCard = (
    e: SyntheticEvent<HTMLButtonElement>,
    type: IShapeModelCard['type']
  ) => {
    setSelectedCard(() => type);
  };

  const router = useRouter();

  const handleClickNext = () => {
    selectedCard && router.push(`${router.pathname}/${selectedCard}`);
  };

  const selectedSrc = useMemo(() => {
    switch (selectedCard) {
      case 'i':
        return I;
      case 't':
        return T;
      case 'pi':
        return Pi;
      default:
        return Choose;
    }
  }, [selectedCard]);
  return (
    <>
      <LeftSection>
        <PageTitle firstDesc="Choose your" secondDesc="Career Shape Model" />
        <ShapeModelDesc />
        <ImageBox styles={{ minWidth: '240px' }} src={selectedSrc} alt={'choose'} />
      </LeftSection>
      <RightSection>
        <ShapeModelCard
          cardList={cardList}
          selectedCard={selectedCard}
          handleClickCard={handleClickCard}
        />
        <BtnLayout>
          <Btn
            onClick={handleClickNext}
            disabled={!selectedCard}
            arrow={true}
            styles={{ size: '20', bgColor: '#1A1A1A', color: '#FFFFFF' }}
            name="Next"
          />
        </BtnLayout>
      </RightSection>
    </>
  );
};

ShapeModel.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default ShapeModel;
