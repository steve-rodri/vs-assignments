import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { Grid } from "@chakra-ui/react";
import { IssueContext } from "../context";
import PageHeader from "../components/PageHeader";
import IssueDetail from "../components/issue/Detail";

const Detail = ({ match }) => {
  const { issues } = useContext(IssueContext);
  const issue = issues.find(issue => issue._id === match.params.id);
  if (!issue) return <Redirect to="/" />;
  return (
    <Grid>
      <PageHeader />
      <IssueDetail {...issue} />
    </Grid>
  );
};

export default Detail;
