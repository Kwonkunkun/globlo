import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const Footer: React.FC = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.bar} position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <img
              className={classes.logo}
              src="https://capsule-render.vercel.app/api?type=shark&color=auto&height=100%&section=footer"
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
  },
  bar: {
    boxShadow: "none",
  },
  title: {
    flexGrow: 1,
  },
  logo: {
    width: "100%",
  },
}));

export default Footer;
