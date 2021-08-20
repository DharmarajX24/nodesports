import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";

const currencies = [
  {
    value: "COC",
    label: "Clash of clans",
  },
  {
    value: "CR",
    label: "Clash Royale",
  },
  {
    value: "COD",
    label: "COD",
  },
  {
    value: "FIFA",
    label: "FIFA",
  },
];

function PopUp({ closePopUp }) {
  const [currency, setCurrency] = useState("EUR");

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };
  return (
    <div className="fixed flex flex-row justify-center inset-0 z-10 items-center ">
      <div className="max-w-2xl  bg-secondary  w-full flex flex-col ">
        <button onClick={() => closePopUp()} className="self-end mr-4 mt-4">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2C17.514 2 22 6.486 22 12C22 17.514 17.514 22 12 22C6.486 22 2 17.514 2 12C2 6.486 6.486 2 12 2ZM12 0C5.373 0 0 5.373 0 12C0 18.627 5.373 24 12 24C18.627 24 24 18.627 24 12C24 5.373 18.627 0 12 0ZM18 16.538L13.408 11.99L17.954 7.403L16.538 6L11.993 10.589L7.405 6.046L6 7.451L10.593 12.003L6.046 16.595L7.451 18L12.006 13.404L16.597 17.954L18 16.538Z"
              fill="#151B27"
            />
          </svg>
        </button>
        <form className="p-4">
          <TextField
            required
            color="secondary"
            fullWidth
            label="Tournament name"
            variant="filled"
          />
          <TextField
            id="filled-select-currency-native"
            select
            label="Game"
            value={currency}
            onChange={handleChange}
            SelectProps={{
              native: true,
            }}
            color="secondary"
            fullWidth
            helperText="Please select your game"
            variant="filled"
          >
            {currencies.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>

          <div className="flex justify-end">
            <button
              onClick={() => closePopUp()}
              className="px-6 py-1 rounded  "
            >
              Cancel
            </button>
            <button className="bg-branding px-6 py-1 rounded ml-3  hover:text-branding hover:bg-white ">
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PopUp;
