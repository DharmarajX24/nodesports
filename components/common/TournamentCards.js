import React from "react";
import Image from "next/image";
import clashRoyale from "../../public/cr.jpg";
import Link from "next/link";

function TournamentCards({ data }) {
  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-10 px-4">
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
  );
}

export default TournamentCards;
