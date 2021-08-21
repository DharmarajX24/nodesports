import React from "react";
import PopUp from "./PopUp";

function NoTournament({ createUserTournament, handlePopup, showPopUp }) {
  return (
    <div className="flex flex-col items-center p-10">
      <div className="text-3xl">
        You dont have any active tournament going on
      </div>
      <button
        onClick={() => handlePopup()}
        className="bg-secondarybranding font-medium mt-6 px-6 py-2 rounded hover:bg-white hover:text-secondarybranding hover:border-branding hover:border-2 hover:border-solid"
      >
        Create tournament
      </button>
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
