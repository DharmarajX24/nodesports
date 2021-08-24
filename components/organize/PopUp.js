import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { games } from "../../data/games";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";

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
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2C17.514 2 22 6.486 22 12C22 17.514 17.514 22 12 22C6.486 22 2 17.514 2 12C2 6.486 6.486 2 12 2ZM12 0C5.373 0 0 5.373 0 12C0 18.627 5.373 24 12 24C18.627 24 24 18.627 24 12C24 5.373 18.627 0 12 0ZM18 16.538L13.408 11.99L17.954 7.403L16.538 6L11.993 10.589L7.405 6.046L6 7.451L10.593 12.003L6.046 16.595L7.451 18L12.006 13.404L16.597 17.954L18 16.538Z"
              fill="#EB2B44"
            />
          </svg>
        </IconButton>
        <form className="p-4">
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
            <Button
              onClick={(e) => createUserTournament(e, name, game)}
              variant="contained"
              color="secondary"
            >
              Create
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PopUp;
