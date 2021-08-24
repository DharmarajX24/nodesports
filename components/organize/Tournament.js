import React from "react";
import PopUp from "./PopUp";
import Image from "next/image";
import clashRoyale from "../../public/cr.jpg";
import Link from "next/link";
import Button from "@material-ui/core/Button";
import TournamentCards from "../common/TournamentCards";

function Tournament({ createUserTournament, handlePopup, showPopUp, data }) {
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
      <TournamentCards data={data} />
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
