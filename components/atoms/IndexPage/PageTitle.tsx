import tw from 'twin.macro';
import { Headline } from '../../../styles/typography';

interface IPageTitleProps {
  firstDesc: string;
  secondDesc: string;
}

const TitleBox = tw.div`mb-14`;
const Title = tw(Headline)`text-[#1A1A1A] text-[56px] font-bold whitespace-pre-line`;
const LineTitle = tw(Title)`w-max relative`;
// before:content[url('img/icons/line.svg')] before:absolute

const PageTitle = ({ firstDesc, secondDesc }: IPageTitleProps) => {
  return (
    <TitleBox>
      <Title>{firstDesc}</Title>
      <LineTitle>{secondDesc}</LineTitle>
    </TitleBox>
  );
};

export default PageTitle;
