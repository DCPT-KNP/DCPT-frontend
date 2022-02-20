import Image from 'next/image';
import tw from 'twin.macro';
import { ICard } from '../../interface/roadmap';
import Chip from '../atoms/Chip';

interface IRoadmapCardProps {
  cardList: ICard[];
}

const CardList = tw.div`grid grid-cols-2 grid-rows-2 gap-10 flex-grow`;
const Card = tw.div`grid`;
const CardInfoBox = tw.div`flex mt-5 h-10`;
const CardDesc = tw.p`text-[#999999] ml-[1rem] text-[0.8rem] self-center`;
const RoadmapCard = ({ cardList }: IRoadmapCardProps) => {
  return (
    <CardList>
      {cardList?.map(({ src, alt, title, desc }) => (
        <Card key={alt}>
          <Image src={src} alt={alt} />
          <CardInfoBox>
            <Chip
              content={title}
              styles={{ fontSize: '0.9rem', fontWeight: 500, padding: '0.6rem 1rem' }}
            />
            <CardDesc>{desc}</CardDesc>
          </CardInfoBox>
        </Card>
      ))}
    </CardList>
  );
};

export default RoadmapCard;
