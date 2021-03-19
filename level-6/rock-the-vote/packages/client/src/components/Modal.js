import {
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  VStack,
  Text,
} from "@chakra-ui/react";
import { DeleteButton } from "./buttons";

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

export const ConfirmDeletion = ({ onDelete, focusRef, ...rest }) => {
  return (
    <Modal
      headerContent={"Confirm Deletion"}
      initialFocusRef={focusRef}
      {...rest}
    >
      <VStack spacing={6}>
        <Text>Are you sure you want to delete this?</Text>
        <DeleteButton onClick={onDelete} focusRef={focusRef} />
      </VStack>
    </Modal>
  );
};

export default Modal;
