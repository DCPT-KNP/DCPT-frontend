import tw from 'twin.macro';

interface IMissionEmojiProps {
  emoji: string;
}

const Emoji = tw.div`mr-1 `;
const MissionEmoji = ({ emoji }: IMissionEmojiProps) => {
  return <Emoji>{emoji}</Emoji>;
};

export default MissionEmoji;
