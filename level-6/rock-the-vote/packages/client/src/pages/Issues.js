import React from "react";
import { Grid } from "@chakra-ui/react";
import { PageHeader, IssueList } from "../components";

const Issues = props => {
  return (
    <Grid pb={20}>
      <PageHeader />
      <IssueList {...props} />
    </Grid>
  );
};

export default Issues;
