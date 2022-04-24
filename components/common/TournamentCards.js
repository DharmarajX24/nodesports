import React from "react";
import Image from "next/image";
import Link from "next/link";
import Calendar from "../icons/Calendar";
import Location from "../icons/Location";
import { isObjectEmpty } from "../../handlers/utility";
import { games } from "../../data/games";

function TournamentCards({ data, baseRoute }) {
  return (
    <div className="grid grid-cols-1 gap-6 px-4 pt-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {data.map((card) => {
        let imageCoverIndex = null;
        for (const [key, value] of Object.entries(games)) {
          if (card.game === value.name) {
            imageCoverIndex = key;
          }
        }
        return (
          <Link href={`/${baseRoute}/tournament/${card._id}`} key={card._id}>
            <a className="p-4 bg-secondary hover:outline hover:outline-offset-2 hover:outline-blue-500">
              <div className="flex items-center pb-4">
                <Image
                  className="rounded"
                  width="60"
                  height="60"
                  alt="game cover"
                  src={games[imageCoverIndex].image}
                  // Todo : replace image based on card.name
                />
                <div className="px-2">
                  <div className="font-bold">{card.name}</div>
                  <div className="font-light">{card.game}</div>
                </div>
              </div>
              <div className="px-2">
                <div className="flex pb-4">
                  <Calendar />
                  <div className="pl-10 text-lg font-medium">
                    {card.time.start === 0 || isObjectEmpty(card.time.start)
                      ? "TBD"
                      : card.time.start}
                  </div>
                </div>
                <div className="flex">
                  <Location />
                  <div className="pl-10 text-lg font-medium">
                    {card.region || "TBD"}
                  </div>
                </div>
              </div>
            </a>
          </Link>
        );
      })}
    </div>
  );
}

export default TournamentCards;
