import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const currencies = [
  {
    value: "USD",
    label: "전체",
  },
  {
    value: "EUR",
    label: "한국",
  },
  {
    value: "BTC",
    label: "중국",
  },
  {
    value: "JPY",
    label: "일본",
  },
];

const SearchForm: React.FC = () => {
  const classes = useStyles();
  const [currency, setCurrency] = useState("EUR");
  const [isExpand, setIsExpand] = useState(false);

  const handleChange = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setCurrency(event.target.value);
  };

  const onClickExpand = () => {
    setIsExpand(!isExpand);
  };

  return (
    <Grid className={classes.root} container>
      {isExpand && (
        <>
          <Grid item xs={6} sm={3}>
            <TextField
              id="outlined-basic"
              variant="outlined"
              className={classes.field}
              helperText="검색어를 기입해주세요"
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <TextField
              id="outlined-select-currency"
              select
              value={currency}
              onChange={handleChange}
              helperText="권역을 선택해 주세요"
              variant="outlined"
              className={classes.field}
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={6} sm={3}>
            <TextField
              id="outlined-select-currency"
              select
              value={currency}
              onChange={handleChange}
              helperText="구독자 최소범위를 선택해 주세요"
              variant="outlined"
              className={classes.field}
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={6} sm={3}>
            <TextField
              id="outlined-select-currency"
              select
              value={currency}
              onChange={handleChange}
              helperText="구독자 최대범위를 선택해 주세요"
              variant="outlined"
              className={classes.field}
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid className={classes.button} item xs={12}>
            <Button variant="contained" color="primary">
              Search
            </Button>
          </Grid>
        </>
      )}
      <Grid className={classes.expand} item xs={12}>
        <IconButton onClick={onClickExpand} aria-label="delete" color="primary">
          {isExpand ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </IconButton>
      </Grid>
    </Grid>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1),
    textAlign: "center",
  },
  field: {
    textAlign: "start",
    width: "100%",
    padding: theme.spacing(2),
  },
  button: {
    marginTop: theme.spacing(3),
  },
  expand: {
    cursor: "pointer",
  },
}));

export default SearchForm;
