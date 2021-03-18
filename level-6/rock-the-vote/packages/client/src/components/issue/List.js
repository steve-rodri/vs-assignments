import React, { useContext } from "react";
import { VStack } from "@chakra-ui/react";
import IssueContext from "../../context/IssueContext";
import { Tile } from ".";

const List = ({ match }) => {
  let { issues } = useContext(IssueContext);
  if (match.params.id) {
    issues = issues.filter(issue => issue.creator._id === match.params.id);
  }
  return (
    <VStack p={50} spacing={50} align="stretch">
      {issues.map(issue => (
        <Tile key={issue._id} {...issue} />
      ))}
    </VStack>
  );
};

export default List;
