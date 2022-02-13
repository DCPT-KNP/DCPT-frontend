import tw from 'twin.macro';
import CommonTitle from '../atoms/CommonTitle';
import Avatar from '../atoms/Avatar';
import Chip from '../atoms/Chip';

const Card = tw.div`flex gap-[2rem]`;
const Box = tw.div`flex flex-col gap-[1.4rem] w-[40%]`;
const ChipList = tw.div`flex gap-2 flex-wrap`;
const MyInfoCard = () => {
  return (
    <Card>
      <Avatar src={'https://source.unsplash.com/user/c_v_r/1900x800'} />
      <Box>
        <CommonTitle
          title={'귀여운 너구리'}
          styles={{ fontSize: '1.5rem', fontWeight: 700 }}
        />
        <ChipList>
          <button>
            <Chip
              content={'UX Researcher'}
              styles={{
                color: '#1A1A1A',
                bgColor: '#F0F0F0',
                padding: '10px 16px',
                fontSize: '14px',
                fontWeight: 500
              }}
            />
          </button>
          <button>
            <Chip
              content={'UX Designer'}
              styles={{
                color: '#1A1A1A',
                bgColor: '#F0F0F0',
                padding: '10px 16px',
                fontSize: '14px',
                fontWeight: 500
              }}
            />
          </button>
          <button>
            <Chip
              content={'Product Designer'}
              styles={{
                color: '#1A1A1A',
                bgColor: '#F0F0F0',
                padding: '10px 16px',
                fontSize: '14px',
                fontWeight: 500
              }}
            />
          </button>
        </ChipList>
      </Box>
    </Card>
  );
};

export default MyInfoCard;
