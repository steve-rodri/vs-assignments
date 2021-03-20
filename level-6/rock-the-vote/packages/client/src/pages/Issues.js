import React from "react";
import { Grid } from "@chakra-ui/react";
import { PageHeader, IssueList } from "../components";

const Issues = props => {
  return (
    <Grid px={[5, 5, 50, 100]} pb={20}>
      <PageHeader />
      <IssueList {...props} />
    </Grid>
  );
};

export default Issues;
