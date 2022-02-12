import tw from 'twin.macro';

interface IMissionDescriptionProps {
  description: string;
}

const Desc = tw.p`text-[12px] mb-4`;
const MissionDescription = ({ description }: IMissionDescriptionProps) => {
  return <Desc>{description}</Desc>;
};

export default MissionDescription;
