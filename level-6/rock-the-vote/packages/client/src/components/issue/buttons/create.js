import React, { useRef } from "react";
import { useDisclosure } from "@chakra-ui/react";
import { AddButton } from "../../global/buttons";
import { IssueFormInModal } from "../modals";

export const CreateIssueInModalButton = props => {
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
