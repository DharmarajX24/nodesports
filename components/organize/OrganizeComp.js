import React, { useState, useEffect } from "react";
import NoTournament from "./NoTournament";
import Tournament from "./Tournament";
import { useRouter } from "next/router";

function OrganizeComp({ data }) {
  const router = useRouter();

  const [showPopUp, setShowPopup] = useState(false);

  const handlePopup = () => {
    setShowPopup(true);
  };

  const createUserTournament = async (e, name, game) => {
    e.preventDefault();
    console.log("called");
    const res = await fetch("/api/tournaments", {
      method: "POST",
      body: JSON.stringify({ name, game }),
      headers: { "Content-Type": "application/json" },
    });
    setShowPopup(false);

    const { data, error } = await res.json();

    if (data) {
      await router.push(`/organize/tournament/${data}`);
    } else {
      console.log(error);
    }
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
