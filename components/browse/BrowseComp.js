import React from "react";
import TournamentCards from "../common/TournamentCards";

function BrowseComp({ data }) {
  return (
    <div className="max-w-6xl mx-auto p-2 md:p-6">
      <TournamentCards data={data} baseRoute="browse" />
    </div>
  );
}

export default BrowseComp;
