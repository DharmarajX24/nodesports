import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { getChanges } from "../../../handlers/data";
import Button from "@material-ui/core/Button";

const platforms = ["Xbox", "Pc", "PS4"];
const regions = ["ASIA", "AMERICA", "EUROPE", "AFRICA"];
const useStyles = makeStyles(() => ({
  root: {
    "& .MuiTextField-root": {
      backgroundColor: "#282C38",
      width: "100%",
    },
  },
  textField: {
    width: 400,
    margin: "8px",
  },
  datePickor: {
    margin: "8px",
  },
}));

export default function Edit({ data }) {
  const classes = useStyles();

  const [details, setDetails] = useState({
    description: data.description,
    platform: data.platform,
    region: data.region,
    time: {
      start: data.time.start,
      end: data.time.end,
    },
    contact: {
      email: data.contact.email,
      phone: data.contact.phone,
      twitter: data.contact.twitter,
      discord: data.contact.discord,
    },
  });
  function handleChange(evt) {
    const value = evt.target.value;
    setDetails({
      ...details,
      [evt.target.name]: value,
    });
  }
  function handleChangeContact(evt) {
    const value = evt.target.value;
    setDetails({
      ...details,
      contact: {
        ...details.contact,
        [evt.target.name]: value,
      },
    });
  }
  function handleChangeTime(evt) {
    const value = evt.target.value;
    setDetails({
      ...details,
      time: {
        ...details.time,
        [evt.target.name]: value,
      },
    });
  }
  const updateUserTournament = async () => {
    const updatedData = getChanges(data, details);
    const res = await fetch(`/api/tournaments/${data._id}`, {
      method: "PATCH",
      body: JSON.stringify(updatedData),
      headers: { "Content-Type": "application/json" },
    });
    const { data: result, error } = await res.json();
    console.log(result);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUserTournament();
  };
  return (
    <form
      onSubmit={handleSubmit}
      className={classes.root}
      noValidate
      autoComplete="off"
    >
      <div className="text-white w-full">
        <div className="py-4">
          <div className="text-2xl px-2">About this tournament</div>

          <TextField
            id="standard-multiline-static"
            label="Description"
            className={classes.textField}
            multiline
            rows={4}
            onChange={handleChange}
            name="description"
            value={details.description}
            color="secondary"
            InputLabelProps={{
              style: { color: "#fff" },
            }}
            InputProps={{
              style: { color: "#1380F0" },
            }}
            fullWidth
          />
        </div>

        <div className="py-4">
          <div className="text-2xl px-2">Details</div>
          <TextField
            id="filled-select-currency-native"
            select
            className={classes.textField}
            name="platform"
            label="platform"
            value={details.platform}
            onChange={handleChange}
            SelectProps={{
              native: true,
            }}
            InputLabelProps={{
              style: { color: "#fff" },
            }}
            InputProps={{
              style: { color: "#1380F0" },
            }}
            color="secondary"
            fullWidth
            // helperText="Please select your gaming platform"
            variant="filled"
          >
            {platforms.map((option) => (
              <option
                key={option}
                className="text-secondarybranding"
                value={option}
              >
                {option}
              </option>
            ))}
          </TextField>
          <TextField
            id="filled-select-currency-native"
            select
            className={classes.textField}
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
              style: { color: "#fff" },
            }}
            InputProps={{
              style: { color: "#1380F0" },
            }}
            FormHelperTextProps={{
              style: { color: "#fff" },
            }}
          >
            {regions.map((option) => (
              <option
                key={option}
                className="text-secondarybranding"
                value={option}
              >
                {option}
              </option>
            ))}
          </TextField>
          <div className="flex flex-col">
            <TextField
              id="datetime-local"
              name="startDate"
              label="game date"
              type="datetime-local"
              InputLabelProps={{
                shrink: true,
                style: { color: "#fff" },
              }}
              InputProps={{
                style: { color: "#1380F0" },
              }}
              color="secondary"
              value={details.time.start}
              onChange={handleChangeTime}
              className={classes.datePickor}
            />
            <TextField
              id="datetime-local"
              name="endDate"
              label="game date"
              type="datetime-local"
              className={classes.datePickor}
              InputLabelProps={{
                shrink: true,
                style: { color: "#fff" },
              }}
              InputProps={{
                style: { color: "#1380F0" },
              }}
              color="secondary"
              value={details.time.end}
              onChange={handleChangeTime}
            />
          </div>
        </div>

        <div className="flex py-4 flex-col">
          <div className="text-2xl px-2">Contact</div>
          <TextField
            onChange={handleChangeContact}
            type="email"
            name="email"
            color="secondary"
            InputLabelProps={{
              style: { color: "#fff" },
            }}
            InputProps={{
              style: { color: "#1380F0" },
            }}
            className={classes.textField}
            value={details.contact.email}
            id="standard-basic"
            label="email"
          />
          <TextField
            onChange={handleChangeContact}
            name="phone"
            type="tel"
            color="secondary"
            InputLabelProps={{
              style: { color: "#fff" },
            }}
            InputProps={{
              style: { color: "#1380F0" },
            }}
            className={classes.textField}
            value={details.contact.phone}
            id="standard-basic"
            label="phone"
          />
          <TextField
            onChange={handleChangeContact}
            name="twitter"
            type="url"
            color="secondary"
            InputLabelProps={{
              style: { color: "#fff" },
            }}
            InputProps={{
              style: { color: "#1380F0" },
            }}
            className={classes.textField}
            value={details.contact.twitter}
            id="standard-basic"
            label="twitter"
          />
          <TextField
            onChange={handleChangeContact}
            name="discord"
            type="url"
            color="secondary"
            InputLabelProps={{
              style: { color: "#fff" },
            }}
            InputProps={{
              style: { color: "#1380F0" },
            }}
            className={classes.textField}
            value={details.contact.discord}
            id="standard-basic"
            label="discord"
          />
        </div>

        <div className="p-2 flex justify-end">
          <Button type="submit" variant="contained" color="secondary">
            Update
          </Button>
        </div>
      </div>
    </form>
  );
}
