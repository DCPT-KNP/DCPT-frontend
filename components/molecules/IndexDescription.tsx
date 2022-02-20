import tw from 'twin.macro';

interface IIndexDescriptionProps {
  boldDescription: string;
  description: string;
}
const DescLayout = tw.div`mb-64 flex flex-col`;
const Desc = tw.span`text-lg`;
const BoldDesc = tw(Desc)`font-bold`;
const IndexDescription = ({ boldDescription, description }: IIndexDescriptionProps) => {
  return (
    <DescLayout>
      <BoldDesc>{boldDescription}</BoldDesc>
      <Desc dangerouslySetInnerHTML={{ __html: description }}></Desc>
    </DescLayout>
  );
};

export default IndexDescription;
