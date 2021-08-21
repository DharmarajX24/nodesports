import React, { useState, useEffect } from "react";
import NoTournament from "./NoTournament";
import Tournament from "./Tournament";

function OrganizeComp({ data }) {
  const createUserTournament = async (name, game) => {
    console.log("called");
    const res = await fetch("/api/tournaments", {
      method: "POST",
      body: JSON.stringify({ name, game }),
      headers: { "Content-Type": "application/json" },
    });
    const result = await res.json();
    return result;
  };
  const [showPopUp, setShowPopup] = useState(false);

  const handlePopup = () => {
    setShowPopup(true);
  };
  return (
    <div className="p-10">
      {data.length ? (
        <Tournament
        createUserTournament={createUserTournament}
          data={data}
          handlePopup={handlePopup}
          showPopUp={showPopUp}
        />
      ) : (
        <NoTournament
          createUserTournament={createUserTournament}
          handlePopup={handlePopup}
          showPopUp={showPopUp}
        />
      )}
    </div>
  );
}

export default OrganizeComp;
