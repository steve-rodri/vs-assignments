import React, { useContext, useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { Grid, VStack, Divider } from "@chakra-ui/react";
import { Issue, PageHeader, CommentListWithHeader } from "../components";
import { IssueContext } from "../context";

const Detail = ({ match }) => {
  const { find } = useContext(IssueContext);
  const [loading, setLoading] = useState(true);
  const [issue, setIssue] = useState();

  useEffect(() => {
    const load = async () => {
      const issue = await find(match.params.id);
      setIssue(issue);
      setLoading(false);
    };
    load();
  }, [find, match.params.id]);

  if (!loading && !issue) return <Redirect to="/" />;
  if (loading) return null;
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
