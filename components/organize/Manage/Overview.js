import React from "react";
import Image from "next/image";
import Hero from "../../../public/cod.png";

function Overview({ data }) {
  return (
    <div>
      <Image src={Hero} height="400" />

      <div className="px-2 py-4">
        <div className="py-2 font-semibold text-2xl">About this tournament</div>
        <div>{data.description || "TBD"}</div>
      </div>

      <div className='py-4 px-2'>
        <div className="py-2 font-semibold text-2xl ">Details</div>

          <div className="text-xs text-gray-400">Game, platform, region</div>
          <div className="pb-2">{data.game} | {data.platform} | {data.region}</div>

        <div className="pt-6">
          <div className="text-xs text-gray-400">Date and time</div>
          <div className="">
            {data.time.start !== 0
              ? new Date(data.createdAt).toLocaleString()
              : "Schedule unavailable"}
          </div>
        </div>
              </div>

        <div className='py-4 px-2'>
        <div className="py-2 font-semibold text-2xl">Contact</div>
        <div className="text-xs text-gray-400">email, phone, twitter, discord</div>

        <div className="">{data.contact.email} | {data.contact.phone} | {data.contact.twitter} | {data.contact.discord} </div>

        </div>

    </div>
  );
}

export default Overview;
