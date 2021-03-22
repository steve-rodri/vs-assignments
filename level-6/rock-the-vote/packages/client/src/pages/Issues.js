import React from "react";
import { Grid, Divider } from "@chakra-ui/react";
import { PageHeader, IssueList } from "../components";

const Issues = props => {
  return (
    <Grid pb={20}>
      <PageHeader />
      <Divider />
      <IssueList {...props} />
    </Grid>
  );
};

export default Issues;
