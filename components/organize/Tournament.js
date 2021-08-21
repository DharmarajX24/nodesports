import React from "react";
import PopUp from "./PopUp";

function Tournament({ createUserTournament, handlePopup, showPopUp, data }) {
  return (
    <div className="max-w-5xl mx-auto">
      <div>Tournament exists !!</div>
      <div>{JSON.stringify(data, null, 2)}</div>
      <div className="flex">
        <div className="shadow flex mt-6 flex-2 px-6">
          <input
            className="bg-secondary w-full"
            type="text"
            placeholder="Search..."
          />
          <button className="bg-secondary ">
            <svg
              className="mr-2"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.6451 10.029L9.13731 7.5405C9.62355 6.7805 9.90471 5.8795 9.90471 4.915C9.90471 2.205 7.68312 0 4.95211 0C2.22109 0 0 2.205 0 4.915C0 7.625 2.22109 9.83 4.95261 9.83C5.87672 9.83 6.74238 9.5775 7.48308 9.1385L10.013 11.649C11.0934 12.7195 12.7259 11.101 11.6451 10.029ZM1.53531 4.915C1.53531 3.0455 3.06861 1.524 4.95261 1.524C6.83661 1.524 8.3699 3.045 8.3699 4.915C8.3699 6.785 6.83661 8.306 4.95261 8.306C3.06861 8.306 1.53531 6.7845 1.53531 4.915V4.915ZM2.54811 4.033C3.5478 1.7335 6.9137 2 7.54758 4.4075C6.27075 2.9205 4.02396 2.7605 2.54811 4.033Z"
                fill="white"
              />
            </svg>
          </button>
        </div>

        <button
          onClick={() => handlePopup()}
          className="bg-secondarybranding font-medium mt-6 px-6 py-2 rounded hover:bg-white hover:text-secondarybranding hover:border-branding hover:border-2 hover:border-solid"
        >
          Create tournament
        </button>
      </div>
      {showPopUp ? (
        <>
          <PopUp
            closePopUp={() => setShowPopup(false)}
            createUserTournament={createUserTournament}
          />
          <div className="fixed opacity-60 bg-black inset-0 overflow-y-auto"></div>
        </>
      ) : null}
    </div>
  );
}

export default Tournament;
