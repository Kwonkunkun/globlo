import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

import CrawledList from "./components/crawledList";
import Header from "./components/header";
import SearchForm from "./components/searchForm";

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header />
      <SearchForm />
      <CrawledList />
    </div>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "60%",
      height: "100vh",
      margin: "auto",
      [theme.breakpoints.down("md")]: {
        width: "100%",
      },
    },
  })
);

export default App;
