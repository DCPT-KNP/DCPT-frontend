import tw from 'twin.macro';
import Tip from '../atoms/Tip';

interface ITipsCard {
  content: string;
}

const Wrapper = tw.div`flex gap-2 p-6 bg-[#FAFAFA]`;
const P = tw.p`font-medium text-[#999999] text-[14px]`;
const TipsCard = ({ content }: ITipsCard) => {
  return (
    <Wrapper>
      <Tip />
      <P>{content}</P>
    </Wrapper>
  );
};

export default TipsCard;
