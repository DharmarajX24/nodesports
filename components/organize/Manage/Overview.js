import React from "react";
import Image from "next/image";
import Hero from "../../../public/cod.png";

function Overview({ data }) {
  return (
    <div>
      <Image src={Hero} height="400" />
      <div className="text-gray-400 py-4">
        <div className="py-2 font-semibold text-lg">About this tournament</div>
        <div>{data.description || "TBD"}</div>
      </div>

      <div>
        <div className="py-4 text-lg">Details</div>
        <div>
          <div className="text-xs text-gray-400">Game, platform, region</div>
          <div className="pb-2">{data.game}</div>
          <div className="text-gray-400 text-xs font-semibold">
            Xboxone - ASIA
          </div>
        </div>
        <hr />
        <div className="pt-6">
          <div className="text-xs text-gray-400">Date and time</div>
          <div className="pb-2">
            {data.time.start !== 0
              ? new Date(data.createdAt).toLocaleString()
              : "Schedule unavailable"}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overview;
