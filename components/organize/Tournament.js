import React from "react";
import PopUp from "./PopUp";
import Image from "next/image";
import clashRoyale from "../../public/cr.jpg";
import Link from "next/link";

function Tournament({ createUserTournament, handlePopup, showPopUp, data }) {
  return (
    <div className="max-w-6xl mx-auto">
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
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-10 px-6">
        {data.map((item) => (
          <Link href={`/organize/tournament/${item._id}`} key={item._id}>
            <a className="bg-secondary p-4 hover:shadow-game">
              <div className="flex pb-4">
                <Image
                  className="rounded"
                  width="60"
                  height="60"
                  alt="game cover"
                  src={clashRoyale}
                />
                <div className="px-2">
                  <div className=" font-bold">{item.name}</div>
                  <div className="font-light">{item.game}</div>
                </div>
              </div>
              <div className="px-2">
                <div className="flex pb-4">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 20H16V16H20V20ZM14 10H10V14H14V10ZM20 10H16V14H20V10ZM8 16H4V20H8V16ZM14 16H10V20H14V16ZM8 10H4V14H8V10ZM24 2V24H0V2H3V3C3 4.103 3.897 5 5 5C6.103 5 7 4.103 7 3V2H17V3C17 4.103 17.897 5 19 5C20.103 5 21 4.103 21 3V2H24ZM22 8H2V22H22V8ZM20 1C20 0.448 19.553 0 19 0C18.447 0 18 0.448 18 1V3C18 3.552 18.447 4 19 4C19.553 4 20 3.552 20 3V1ZM6 3C6 3.552 5.553 4 5 4C4.447 4 4 3.552 4 3V1C4 0.448 4.447 0 5 0C5.553 0 6 0.448 6 1V3Z"
                      fill="white"
                    />
                  </svg>
                  <div className="pl-10 text-lg font-medium">28 AUG 2021</div>
                </div>
                <div className="flex">
                  <svg
                    className="mx-threedotfivepx"
                    width="17"
                    height="24"
                    viewBox="0 0 17 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.25 0C3.92081 0 0 3.403 0 7.602C0 11.8 3.57741 16.812 8.25 24C12.9226 16.812 16.5 11.8 16.5 7.602C16.5 3.403 12.5802 0 8.25 0ZM8.25 11C6.54122 11 5.15625 9.657 5.15625 8C5.15625 6.343 6.54122 5 8.25 5C9.95878 5 11.3438 6.343 11.3438 8C11.3438 9.657 9.95878 11 8.25 11Z"
                      fill="white"
                    />
                  </svg>
                  <div className="pl-10 text-lg font-medium">AMERICA</div>
                </div>
              </div>
            </a>
          </Link>
        ))}
      </div>
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
