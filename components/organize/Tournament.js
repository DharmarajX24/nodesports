import React from "react";
import PopUp from "./PopUp";
import Button from "@material-ui/core/Button";
import TournamentCards from "../common/TournamentCards";

function Tournament({ createUserTournament, handlePopup, showPopUp, data }) {
  console.log({ data });
  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-searchBarAndBtnColums auto-rows-searchBarAndBtnRows gap-4 px-4">
        <div>
          <input
            className="bg-secondary w-full h-full"
            type="text"
            placeholder="Search..."
          />
        </div>

        <Button
          onClick={() => handlePopup()}
          size="small"
          variant="contained"
          color="secondary"
        >
          Create Tournament
        </Button>
      </div>
      <TournamentCards data={data} baseRoute="organize" />
      {showPopUp ? (
        <>
          <PopUp
            closePopUp={handlePopup}
            createUserTournament={createUserTournament}
          />
          <div className="fixed opacity-60 bg-black inset-0 overflow-y-auto"></div>
        </>
      ) : null}
    </div>
  );
}

export default Tournament;
