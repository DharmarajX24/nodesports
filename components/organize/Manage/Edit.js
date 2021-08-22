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
  const [platform, setPlatform] = useState("Xbox");
  const [region, setRegion] = useState("ASIA");

  const handlePlatformChange = (event) => {
    setPlatform(event.target.value);
  };
  const handleRegionChange = (event) => {
    setRegion(event.target.value);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div className="text-white w-full">
        <TextField
          id="standard-multiline-static"
          label="Description"
          multiline
          rows={4}
          defaultValue="Details of your tournament goes here"
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
              label="platform"
              value={platform}
              onChange={handlePlatformChange}
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
              label="region"
              value={region}
              onChange={handleRegionChange}
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
            label="game date"
            type="datetime-local"
            defaultValue="2020-05-24T10:30"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
              style: { color: "#fff" },
            }}
            InputProps={{
              style: { color: "#fff" },
            }}
            color="secondary"
          />
        </div>
      </div>
    </form>
  );
}
