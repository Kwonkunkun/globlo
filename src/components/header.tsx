import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const Header: React.FC = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.bar} position="static">
        <Toolbar className={classes.bar}>
          <Typography variant="h6" className={classes.title}>
            <img
              className={classes.logo}
              src="https://capsule-render.vercel.app/api?type=shark&color=auto&height=100%&section=header&text=globlo&fontSize=90"
            />
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: 0,
  },
  bar: {
    boxShadow: "none",
    padding: "0",
  },
  title: {
    flexGrow: 1,
  },
  logo: {
    width: "100%",
  },
}));

export default Header;
