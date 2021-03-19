import React, { useRef } from "react";
import { useDisclosure } from "@chakra-ui/react";
import { EditButton } from "../../buttons";
import { CommentFormInModal } from ".";

export const EditCommentFromModalButton = ({ _id, body, ...rest }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const focusRef = useRef();
  const props = { ...rest, isOpen, onClose, focusRef };
  return (
    <>
      <EditButton onClick={onOpen} />
      <CommentFormInModal
        {...props}
        title={"Edit Comment"}
        values={{ _id, body }}
        focusRef={focusRef}
      />
    </>
  );
};
