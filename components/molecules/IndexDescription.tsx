import tw from 'twin.macro';

interface IIndexDescriptionProps {
  boldDescription: string;
  description: string;
}

const Desc = tw.span`text-lg`;
const BoldDesc = tw(Desc)`font-bold`;
const IndexDescription = ({ boldDescription, description }: IIndexDescriptionProps) => {
  return (
    <>
      <BoldDesc>{boldDescription}</BoldDesc>
      <Desc dangerouslySetInnerHTML={{ __html: description }}></Desc>
    </>
  );
};

export default IndexDescription;
