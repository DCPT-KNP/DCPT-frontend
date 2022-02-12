import tw from 'twin.macro';

interface IStatusTitleProps {
  title: string;
}

const Title = tw.h2`text-[#999999] text-[1.5rem] font-semibold`;
const StatusTitle = ({ title }: IStatusTitleProps) => {
  return <Title>{title}</Title>;
};

export default StatusTitle;
