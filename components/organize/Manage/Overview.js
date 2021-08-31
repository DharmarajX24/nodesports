import React from "react";
import Image from "next/image";
import Hero from "../../../public/callofduty.png";
import { unixToMaterialUi } from "../../../handlers/date-helper";
import { isObjectEmpty } from "../../../handlers/utility";

function Overview({ data }) {
  console.log(data);
  return (
    <div>
      <Image src={Hero} alt="" height="400" />

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
              ? unixToMaterialUi(data.time.start)
              : "Schedule unavailable"}
            <br />
            {data.time.start !== 0 && unixToMaterialUi(data.time.end)}
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
