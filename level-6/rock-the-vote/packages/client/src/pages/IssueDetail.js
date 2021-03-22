import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { Grid, VStack, Divider } from "@chakra-ui/react";
import { Issue, PageHeader, CommentListWithHeader } from "../components";
import { IssueContext } from "../context";

const Detail = ({ match }) => {
  const { issues } = useContext(IssueContext);
  const issue = issues.find(i => i._id === match.params.id);
  if (!issue) return <Redirect to="/" />;
  return (
    <Grid>
      <PageHeader />
      <Divider />
      <VStack w="full" m="auto" maxW={1200} spacing={100} p={[4, 8, 12, 16]}>
        <Issue {...issue} />
        <CommentListWithHeader {...issue} issueId={issue._id} />
      </VStack>
    </Grid>
  );
};

export default Detail;
