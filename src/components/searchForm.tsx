import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Grid from "@material-ui/core/Grid";

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

const SearchForm: React.FC = (props) => {
  const classes = useStyles();
  const [currency, setCurrency] = useState("EUR");

  const handleChange = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setCurrency(event.target.value);
  };

  return (
    <Grid className={classes.root} container spacing={2}>
      <Grid item xs={6} sm={3}>
        <TextField
          id="outlined-basic"
          label="keyword"
          variant="outlined"
          className={classes.field}
        />
      </Grid>
      <Grid item xs={6} sm={3}>
        <TextField
          id="outlined-select-currency"
          select
          label="Select"
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
          label="Select"
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
          label="Select"
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
    </Grid>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2),
  },
  field: {
    width: "75%",
  },
}));

export default SearchForm;
