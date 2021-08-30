import React from "react";
import TournamentCards from "../common/TournamentCards";

function BrowseComp({ data }) {
  const isTournamentExist = data.length;
  return (
    <div className="max-w-6xl mx-auto p-2 md:p-6">
      {isTournamentExist ? (
        <TournamentCards data={data} baseRoute="browse" />
      ) : (
        <div className="text-3xl text-center p-10">
          There are no Active tournaments going on
        </div>
      )}
    </div>
  );
}

export default BrowseComp;
