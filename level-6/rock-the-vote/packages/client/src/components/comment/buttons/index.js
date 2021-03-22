import React, { useContext } from "react";
import { HStack } from "@chakra-ui/react";
import { UserContext } from "../../../context";
import { EditCommentInModalButton } from "./edit";
import { DeleteCommentInModalButton } from "./delete";

export const ModifierButtons = props => {
  const { user } = useContext(UserContext);
  if (user._id !== props.creator._id) return null;
  return (
    <HStack>
      <EditCommentInModalButton {...props} />
      <DeleteCommentInModalButton {...props} />
    </HStack>
  );
};

export * from "./create";
export * from "./delete";
export * from "./edit";
export * from "./view";
