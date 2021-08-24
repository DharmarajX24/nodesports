import React from "react";
import TournamentCards from "../common/TournamentCards";

function BrowseComp({ data }) {
  return (
    <div className="max-w-6xl mx-auto">
      <TournamentCards data={data} />
    </div>
  );
}

export default BrowseComp;
