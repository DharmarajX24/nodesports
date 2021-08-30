import React from "react";
import Image from "next/image";
import clashRoyale from "../../public/cr.jpg";
import Link from "next/link";
import Calendar from "../icons/Calendar";
import Location from "../icons/Location";

function TournamentCards({ data, baseRoute }) {
  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-6 px-4">
      {data.map((item) => (
        <Link href={`/${baseRoute}/tournament/${item._id}`} key={item._id}>
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
                <div className=" font-bold">{item.name}</div>
                <div className="font-light">{item.game}</div>
              </div>
            </div>
            <div className="px-2">
              <div className="flex pb-4">
                <Calendar />
                <div className="pl-10 text-lg font-medium">28 AUG 2021</div>
              </div>
              <div className="flex">
                <Location />
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
