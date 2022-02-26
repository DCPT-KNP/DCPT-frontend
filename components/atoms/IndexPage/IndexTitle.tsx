import tw from 'twin.macro';
import { Headline } from '../../../styles/typography';

interface IIndexPageTitleProps {
  title: string;
}

// const Title = tw.h1`text-[#1A1A1A] text-[56px] font-bold whitespace-pre-line mb-14`;

const Title = tw(Headline)`
  text-black  whitespace-pre-line mb-14
`;

const IndexPageTitle = ({ title }: IIndexPageTitleProps) => {
  return <Title dangerouslySetInnerHTML={{ __html: title }}></Title>;
};

export default IndexPageTitle;
