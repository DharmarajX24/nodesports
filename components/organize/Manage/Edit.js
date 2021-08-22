import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const platforms = ["Xbox", "Pc", "PS4"];
const regions = ["ASIA", "AMERICA", "EUROPE", "AFRICA"];
const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      backgroundColor: "#282C38",
      color: "green",
    },
  },
  textField: {
    width: 400,
  },
}));

export default function Edit({ data }) {
  const classes = useStyles();

  const [details, setDetails] = useState({
    description: "",
    platform: "Xbox",
    region: "ASIA",
    selectedDate: "2014-08-18T21:11:54",
  });

  function handleChange(evt) {
    const value = evt.target.value;
    setDetails({
      ...details,
      [evt.target.name]: value,
    });

    console.log({
      ...details,
      [evt.target.name]: value,
    });
  }

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div className="text-white w-full">
        <TextField
          id="standard-multiline-static"
          label="Description"
          multiline
          rows={4}
          onChange={handleChange}
          name="description"
          value={details.description}
          color="secondary"
          InputLabelProps={{
            style: { color: "#EB2B44" },
          }}
          InputProps={{
            style: { color: "#fff" },
          }}
          fullWidth
        />
        <div className="py-4 mx-2 ">
          <div className="text-lg">Details</div>
          <div className="text-xs text-gray-400">Game, platform, region</div>
          <div className="pb-2">{data.game}</div>
          <div className="flex">
            <TextField
              id="filled-select-currency-native"
              select
              name="platform"
              label="platform"
              value={details.platform}
              onChange={handleChange}
              SelectProps={{
                native: true,
              }}
              InputLabelProps={{
                style: { color: "#EB2B44" },
              }}
              InputProps={{
                style: { color: "#fff" },
              }}
              color="secondary"
              fullWidth
              // helperText="Please select your gaming platform"
              variant="filled"
            >
              {platforms.map((option) => (
                <option key={option} className="text-branding" value={option}>
                  {option}
                </option>
              ))}
            </TextField>
            <TextField
              id="filled-select-currency-native"
              select
              name="region"
              label="region"
              value={details.region}
              onChange={handleChange}
              SelectProps={{
                native: true,
              }}
              color="secondary"
              fullWidth
              helperText="Please select your gaming region"
              variant="filled"
              InputLabelProps={{
                style: { color: "#EB2B44" },
              }}
              InputProps={{
                style: { color: "#fff" },
              }}
            >
              {regions.map((option) => (
                <option key={option} className="text-branding" value={option}>
                  {option}
                </option>
              ))}
            </TextField>
          </div>
          <TextField
            id="datetime-local"
            name="selectedDate"
            label="game date"
            type="datetime-local"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
              style: { color: "#EB2B44" },
            }}
            InputProps={{
              style: { color: "#fff" },
            }}
            color="secondary"
            value={details.selectedDate}
            onChange={handleChange}
          />
        </div>
      </div>
    </form>
  );
}
