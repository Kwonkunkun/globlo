import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

import CrawledList from "./components/crawledList";
import Header from "./components/header";
import SearchForm from "./components/searchForm";
import Footer from "./components/footer";

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header />
      <SearchForm />
      <CrawledList />
      <Footer />
    </div>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      height: "100vh",
      margin: "auto",
      display: "flex",
      flexDirection: "column",
    },
  })
);

export default App;
