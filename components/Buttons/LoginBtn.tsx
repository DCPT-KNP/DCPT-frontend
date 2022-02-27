import { useDisclosure } from '@chakra-ui/react';
import Btn from '../common/Btn';
import LoginModal from '../modal/LoginModal';

const LoginBtn = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Btn
        styles={{ size: '20', bgColor: '#1A1A1A', color: '#FFFFFF' }}
        name="로그인"
        onClick={onOpen}
      />
      <LoginModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default LoginBtn;
