import React, { useRef } from "react";
import { useDisclosure } from "@chakra-ui/react";
import { AddButton } from "../../buttons";
import { IssueFormInModal } from ".";

export const CreateIssueFromModalButton = props => {
  const { onOpen, ...rest } = useDisclosure();
  const focusRef = useRef();
  return (
    <>
      <AddButton onClick={onOpen} />
      <IssueFormInModal
        {...props}
        {...rest}
        title={"Create a New Issue"}
        focusRef={focusRef}
      />
    </>
  );
};
