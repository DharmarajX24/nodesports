import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { getChanges } from "../../../handlers/data";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const platforms = ["Xbox", "Pc", "PS4"];
const regions = ["ASIA", "AMERICA", "EUROPE", "AFRICA"];

export default function Edit({ data }) {
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
    const res = await fetch(`/api/tournaments/${data._id}`, {
      method: "POST",
      body: JSON.stringify(details),
      headers: { "Content-Type": "application/json" },
    });
    const { data: result, error } = await res.json();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUserTournament();
  };
  return (
    <Box onSubmit={handleSubmit} noValidate autoComplete="off">
      <div className="w-full text-white">
        <div className="py-4">
          <div className="px-2 text-2xl">About this tournament</div>

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
              style: { color: "#fff" },
            }}
            InputProps={{
              style: { color: "#1380F0" },
            }}
            fullWidth
          />
        </div>

        <div className="py-4">
          <div className="px-2 text-2xl">Details</div>
          <TextField
            id="filled-select-currency-native"
            select
            sx={{ width: "400px", margin: "8px" }}
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
            helperText="Please select your gaming platform"
            variant="filled"
            FormHelperTextProps={{
              style: { color: "#fff" },
            }}
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
            sx={{ width: "400px", margin: "8px" }}
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
              name="start"
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
              sx={{ margin: "8px" }}
            />
            <TextField
              id="datetime-local"
              name="end"
              label="game date"
              type="datetime-local"
              sx={{ margin: "8px" }}
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

        <div className="flex flex-col py-4">
          <div className="px-2 text-2xl">Contact</div>
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
            sx={{ width: "400px", margin: "8px" }}
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
            sx={{ width: "400px", margin: "8px" }}
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
            sx={{ width: "400px", margin: "8px" }}
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
            sx={{ width: "400px", margin: "8px" }}
            value={details.contact.discord}
            id="standard-basic"
            label="discord"
          />
        </div>

        <div className="flex justify-end p-2">
          <Button type="submit" variant="contained" color="secondary">
            Update
          </Button>
        </div>
      </div>
    </Box>
  );
}
