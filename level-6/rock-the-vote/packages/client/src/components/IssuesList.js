import React, { useContext } from "react";
import IssueContext from "../context/IssueContext";
import IssueTile from "./IssueTile";
import { VStack } from "@chakra-ui/react";

const IssuesList = () => {
  const { issues } = useContext(IssueContext);
  return (
    <VStack p={50} spacing={50} align="stretch">
      {issues.map(issue => (
        <IssueTile key={issue._id} {...issue} />
      ))}
    </VStack>
  );
};

export default IssuesList;
