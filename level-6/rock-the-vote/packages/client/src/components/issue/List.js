import React, { useContext } from "react";
import { VStack } from "@chakra-ui/react";
import { IssueContext } from "../../context";
import Skeleton from "./Skeleton";
import Issue from "./self";

export const List = ({ match }) => {
  let { issues, loading } = useContext(IssueContext);
  if (match.params.id) {
    issues = issues.filter(issue => issue.creator._id === match.params.id);
  }
  return (
    <VStack
      w="full"
      m="auto"
      maxW={1200}
      spacing={50}
      align="stretch"
      p={[4, 8, 12, 16]}
    >
      {loading ? renderSkeletons() : renderIssues(issues)}
    </VStack>
  );
};

const renderSkeletons = () => {
  const skeletons = Array.from({ length: 10 });
  return skeletons.map((_, i) => <Skeleton key={i} />);
};

const renderIssues = issues => {
  return issues.map(issue => (
    <Issue key={issue._id} {...issue} linkTitle showCommentsButton />
  ));
};

export default List;
