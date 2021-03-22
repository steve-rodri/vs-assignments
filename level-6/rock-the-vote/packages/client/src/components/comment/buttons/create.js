import React, { useRef } from "react";
import { useDisclosure } from "@chakra-ui/react";
import { AddButton } from "../../global/buttons";
import { CommentFormInModal } from "../modals";

export const CreateCommentInModalButton = props => {
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
