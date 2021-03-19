import React, { useContext } from "react";
import { VStack } from "@chakra-ui/react";
import IssueContext from "../../context/IssueContext";
import Issue from ".";

const List = ({ match }) => {
  let { issues } = useContext(IssueContext);
  if (match.params.id) {
    issues = issues.filter(issue => issue.creator._id === match.params.id);
  }
  return (
    <VStack w="full" m="auto" px={5} maxW={700} spacing={50} align="stretch">
      {issues.map(issue => (
        <Issue key={issue._id} {...issue} linkTitle showCommentButton />
      ))}
    </VStack>
  );
};

export default List;
