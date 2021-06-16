import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import Header from "./components/header";
import Footer from "./components/footer";
import SearchPage from "./pages/searchPage";

const queryClient = new QueryClient();

function App() {
  const classes = useStyles();

  return (
    <QueryClientProvider client={queryClient}>
      <div className={classes.root}>
        <Header />
        <SearchPage />
        <Footer />
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
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
