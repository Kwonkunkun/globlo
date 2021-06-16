import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

import { ChannelInfo } from "../types/types";

interface CrawledListProps {
  data: Array<ChannelInfo> | undefined;
}

const CrawledItem: React.FC<ChannelInfo> = ({
  channel_title,
  thumbnail_url,
  country,
  subscriber_count,
}) => {
  const classes = useStyles();
  return (
    <>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary={channel_title}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                {country}
              </Typography>
              {` - 구독자 수 : ${subscriber_count}`}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </>
  );
};

const CrawledList: React.FC<CrawledListProps> = ({ data }) => {
  const classes = useStyles();
  console.log(data);
  return (
    <List className={classes.root}>
      {data?.map(
        ({ channel_title, thumbnail_url, country, subscriber_count }, idx) => (
          <CrawledItem
            key={idx}
            channel_title={channel_title}
            thumbnail_url={thumbnail_url}
            country={country}
            subscriber_count={subscriber_count}
          />
        )
      )}
    </List>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      maxWidth: "100%",
      height: "100%",
      overflow: "scroll",
      backgroundColor: theme.palette.background.paper,
    },
    inline: {
      display: "inline",
    },
  })
);

export default CrawledList;
