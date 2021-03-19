import React, { useRef } from "react";
import { useDisclosure } from "@chakra-ui/react";
import { EditButton } from "../../buttons";
import { IssueFormInModal } from ".";

export const EditIssueFromModalButton = props => {
  const { onOpen, ...rest } = useDisclosure();
  const focusRef = useRef();
  return (
    <>
      <EditButton onClick={onOpen} />
      <IssueFormInModal
        {...props}
        {...rest}
        title={"Edit Issue"}
        focusRef={focusRef}
        values={props}
      />
    </>
  );
};
