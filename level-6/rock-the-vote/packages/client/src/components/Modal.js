import {
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

export const Modal = ({ headerContent, children, ...rest }) => (
  <ChakraModal {...rest} scrollBehavior="inside" size="xl" isCentered>
    <ModalOverlay />
    <ModalContent pb={6}>
      <ModalHeader pr={35}>{headerContent}</ModalHeader>
      <ModalCloseButton />
      <ModalBody>{children}</ModalBody>
    </ModalContent>
  </ChakraModal>
);

export default Modal;
