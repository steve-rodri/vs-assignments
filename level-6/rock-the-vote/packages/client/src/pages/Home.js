import React from "react";
import Header from "../components/Header";
import IssuesList from "../components/IssuesList";
import { Grid } from "@chakra-ui/react";

const Home = () => {
  return (
    <Grid>
      <Header />
      <IssuesList />
    </Grid>
  );
};

export default Home;
