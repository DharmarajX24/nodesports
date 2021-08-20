import React, { useState } from "react";
import NoTournament from "./NoTournament";
import Tournament from "./Tournament";

function OrganizeComp() {
  const [tournaments, setTournaments] = useState([]);

  return (
    <div className="p-10">
      {tournaments.length ? <Tournament /> : <NoTournament />}
    </div>
  );
}

export default OrganizeComp;
