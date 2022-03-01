import { SubTitle1 } from '@/styles/typography';
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay
} from '@chakra-ui/react';
import tw from 'twin.macro';
import { GoogleIconBtn, KakaoIconBtn, NaverIconBtn } from '../Buttons/IconBtn';

const SocialLoginLayout = tw.div`
  flex gap-12
`;

const SocialBtnBlock = tw.div`
  flex
  flex-col
  gap-5
`;

const SocialBtnName = tw(SubTitle1)`
text-center
text-gray-400
`;
interface ILoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal = ({ isOpen, onClose }: ILoginModalProps) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent padding="12">
          <ModalHeader
            display="flex"
            justifyContent="center"
            padding="0"
            marginBottom="14"
          >
            로그인
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody display="flex" justifyContent="center" padding="0">
            <SocialLoginLayout>
              <SocialBtnBlock>
                <GoogleIconBtn />
                <SocialBtnName>구글</SocialBtnName>
              </SocialBtnBlock>
              <SocialBtnBlock>
                <KakaoIconBtn />
                <SocialBtnName>카카오</SocialBtnName>
              </SocialBtnBlock>
              <SocialBtnBlock>
                <NaverIconBtn />
                <SocialBtnName>네이버</SocialBtnName>
              </SocialBtnBlock>
            </SocialLoginLayout>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default LoginModal;
