import React from "react";
import Image from "next/image";
import Hero from "../../../public/cod.png";

function Overview({ data }) {
  return (
    <div>
      <Image src={Hero} height="400" />
      <div className="text-gray-400 py-4">
        <div className="py-2 font-semibold text-lg">About this tournament</div>
        <div>
          Random text Call of Duty is a first-person shooter video game based on
          id Tech 3, and was released on October 29, 2003. The game was
          developed by Infinity Ward and published by Activision. The game
          simulates the infantry and combined arms warfare of World War II.
        </div>
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
          <div className="pb-2">Thursday,Aug 26th 2021</div>
          <div className="text-gray-400 text-xs font-semibold">6:30 AM PDT</div>
        </div>
      </div>
    </div>
  );
}

export default Overview;
