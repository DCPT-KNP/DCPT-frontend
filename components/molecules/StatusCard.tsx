import tw from 'twin.macro';
import Chip from '../atoms/Chip';
import StatusTitle from '../atoms/StatusTitle';

interface IStatusProps {
  title: string;
  number: number;
}

const TitleBox = tw.div`flex gap-2 mb-1.5`;
const StatusCard = ({ title, number }: IStatusProps) => {
  return (
    <TitleBox>
      <StatusTitle title={title} />
      {number && number > 0 ? (
        <Chip
          styles={{
            bgColor: '#1A1A1A',
            color: '#ffffff',
            fontSize: '11px',
            padding: '4px 8px',
            fontWeight: 500
          }}
          content={number}
        />
      ) : null}
    </TitleBox>
  );
};
export default StatusCard;
