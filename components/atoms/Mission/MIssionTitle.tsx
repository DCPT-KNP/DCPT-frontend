import tw from 'twin.macro';

interface IMissionTitleProps {
  title: string;
}

const H5 = tw.h5`subheading text-base `;
const MissionTitle = ({ title }: IMissionTitleProps) => {
  return <H5>{title}</H5>;
};

export default MissionTitle;
