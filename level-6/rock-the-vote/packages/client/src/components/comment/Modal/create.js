import React, { useRef } from "react";
import { useDisclosure } from "@chakra-ui/react";
import { AddButton } from "../../buttons";
import { CommentFormInModal } from ".";

export const AddCommentFromModalButton = props => {
  const { onOpen, ...rest } = useDisclosure();
  const focusRef = useRef();
  return (
    <>
      <AddButton onClick={onOpen} />
      <CommentFormInModal
        {...props}
        {...rest}
        title={"Add Comment"}
        focusRef={focusRef}
      />
    </>
  );
};
