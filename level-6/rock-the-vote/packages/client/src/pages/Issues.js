import React from "react";
import Header from "../components/PageHeader";
import IssuesList from "../components/issue/List";
import { Grid } from "@chakra-ui/react";

const Issues = props => {
  return (
    <Grid pb={20}>
      <Header />
      <IssuesList {...props} />
    </Grid>
  );
};

export default Issues;
