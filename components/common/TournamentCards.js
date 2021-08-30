import React from "react";
import Image from "next/image";
import clashRoyale from "../../public/cr.jpg";
import Link from "next/link";
import Calendar from "../icons/Calendar";
import Location from "../icons/Location";
import { unixToMaterialUi } from "../../handlers/date-helper"
import { isObjectEmpty } from '../../handlers/utility'
 
function TournamentCards({ data, baseRoute }) {
  console.log({data})
  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-6 px-4">
      {data.map((card) => (
        <Link href={`/${baseRoute}/tournament/${card._id}`} key={card._id}>
          <a className="bg-secondary p-4 hover:shadow-game">
            <div className="flex items-center pb-4">
              <Image
                className="rounded"
                width="60"
                height="60"
                alt="game cover"
                src={clashRoyale}
              />
              <div className="px-2">
                <div className=" font-bold">{card.name}</div>
                <div className="font-light">{card.game}</div>
              </div>
            </div>
            <div className="px-2">
              <div className="flex pb-4">
                <Calendar />
                <div className="pl-10 text-lg font-medium">{card.time.start === 0  || isObjectEmpty(card.time) ? "TBD" : unixToMaterialUi(card.time.start)}</div>
              </div>
              <div className="flex">
                <Location />
                <div className="pl-10 text-lg font-medium">{data.region || 'TBD'}</div>
              </div>  
            </div>
          </a>
        </Link>
      ))}
    </div>
  );
}

export default TournamentCards;
