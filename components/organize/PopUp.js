import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { games } from "../../data/games";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Cancel from "../icons/Cancel";

function PopUp({ closePopUp, createUserTournament }) {
  const [game, setGame] = useState("COD");
  const [name, setName] = useState("");

  const handleChange = (event) => {
    setGame(event.target.value);
  };
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div className="fixed flex flex-row justify-center inset-0 z-10 items-center ">
      <div className="max-w-2xl  bg-secondary  w-full flex flex-col ">
        <IconButton
          className="self-end mr-4 mt-4"
          onClick={() => closePopUp()}
          aria-label="close pop up"
          size="large">
          <Cancel />
        </IconButton>
        <form
          onSubmit={(e) => createUserTournament(e, name, game)}
          className="p-4"
        >
          <TextField
            required
            color="secondary"
            fullWidth
            label="Tournament name"
            value={name}
            onChange={handleNameChange}
            variant="filled"
            InputProps={{
              style: { color: "#1380F0" },
            }}
            InputLabelProps={{
              style: { color: "#fff" },
            }}
          />
          <TextField
            id="filled-select-currency-native"
            select
            label="Game"
            value={game}
            onChange={handleChange}
            SelectProps={{
              native: true,
            }}
            color="secondary"
            fullWidth
            helperText="Please select your game"
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
            {games.map((option) => (
              <option
                className="text-secondarybranding"
                key={option.image}
                value={option.name}
              >
                {option.name}
              </option>
            ))}
          </TextField>

          <div className="flex justify-end">
            <Button type="submit" variant="contained" color="secondary">
              Create
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PopUp;
