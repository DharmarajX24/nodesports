import React from "react";
import PopUp from "./PopUp";
import Button from "@material-ui/core/Button";

function NoTournament({ createUserTournament, handlePopup, showPopUp }) {
  return (
    <div className="flex flex-col items-center p-10">
      <div className="text-3xl">
        You dont have any active tournament going on
      </div>
      <Button
        onClick={() => handlePopup()}
        variant="contained"
        color="secondary"
      >
        Create Tournament
      </Button>
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

export default NoTournament;
