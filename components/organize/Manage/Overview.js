import React from "react";
import Image from "next/image";
import { isObjectEmpty } from "../../../handlers/utility";
import { games } from '../../../data/games'

function Overview({ data }) {
  let imageCoverIndex = null;
  for (const [key, value] of Object.entries(games)) {
    if (data.game === value.name) {
      imageCoverIndex = key;
    }
  }
  return (
    <div>
      <Image src={games[imageCoverIndex].image} alt="Game cover" height="400" width='900'/>
      <div className="px-2 py-4">
        <div className="py-2 font-semibold text-2xl">About this tournament</div>
        <div>{data.description || "TBD"}</div>
      </div>

      <div className="py-4 px-2">
        <div className="py-2 font-semibold text-2xl ">Details</div>

        <div className="text-xs text-gray-400">Game, platform, region</div>
        <div className="pb-2">
          {data.game} | {data.platform} | {data.region}
        </div>

        <div className="pt-6">
          <div className="text-xs text-gray-400">Date and time</div>
          <div className="">
            {data.time.start !== 0
              ? data.time.start
              : "Schedule unavailable"}
            <br />
            {data.time.start !== 0 && data.time.end}
          </div>
        </div>
      </div>
      {isObjectEmpty(data.contact) ? null : (
        <div className="py-4 px-2">
          <div className="py-2 font-semibold text-2xl">Contact</div>
          {data.contact.email ? (
            <>
              <div className="text-xs text-gray-400">email</div>
              <div>{data.contact.email}</div>
            </>
          ) : null}
          {data.contact.phone ? (
            <>
              <div className="text-xs text-gray-400">phone</div>
              <div>{data.contact.phone}</div>
            </>
          ) : null}

          {data.contact.twitter ? (
            <>
              <div className="text-xs text-gray-400">twitter</div>
              <div>{data.contact.twitter}</div>
            </>
          ) : null}

          {data.contact.discord ? (
            <>
              <div className="text-xs text-gray-400">discord</div>
              <div>{data.contact.discord}</div>
            </>
          ) : null}
        </div>
      )}
    </div>
  );
}

export default Overview;
