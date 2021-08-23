import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { getChanges } from "../../../handlers/data";

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
        </div>

        <div className="py-4">
          <div className="text-2xl px-2">Details</div>
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
          <div className="flex">
            <TextField
              id="datetime-local"
              fullWidth
              name="startDate"
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
              value={details.time.start}
              onChange={handleChangeTime}
            />
            <TextField
              id="datetime-local"
              name="endDate"
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
              fullWidth
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
              style: { color: "#EB2B44" },
            }}
            InputProps={{
              style: { color: "#fff" },
            }}
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
              style: { color: "#EB2B44" },
            }}
            InputProps={{
              style: { color: "#fff" },
            }}
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
              style: { color: "#EB2B44" },
            }}
            value={details.contact.twitter}
            InputProps={{
              style: { color: "#fff" },
            }}
            id="standard-basic"
            label="twitter"
          />
          <TextField
            onChange={handleChangeContact}
            name="discord"
            type="url"
            color="secondary"
            InputLabelProps={{
              style: { color: "#EB2B44" },
            }}
            InputProps={{
              style: { color: "#fff" },
            }}
            value={details.contact.discord}
            id="standard-basic"
            label="discord"
          />
        </div>

        <div className="p-2 flex justify-end">
          <button
            className="p-2 rounded bg-secondarybranding hover:text-secondarybranding hover:bg-white"
            type="submit"
          >
            Update
          </button>
        </div>
      </div>
    </form>
  );
}
