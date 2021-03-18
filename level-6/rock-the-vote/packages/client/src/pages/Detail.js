import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import Header from "../components/PageHeader";
import IssueDetail from "../components/issue/Detail";
import IssueContext from "../context/IssueContext";
import { Grid } from "@chakra-ui/react";

const Detail = ({ match }) => {
  const { issues } = useContext(IssueContext);
  const issue = issues.find(issue => issue._id === match.params.id);
  if (!issue) return <Redirect to="/" />;
  return (
    <Grid>
      <Header />
      <IssueDetail {...issue} />
    </Grid>
  );
};

export default Detail;
