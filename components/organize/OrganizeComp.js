import React, { useState, useEffect } from "react";
import NoTournament from "./NoTournament";
import Tournament from "./Tournament";

function OrganizeComp({ data }) {
  const createUserTournament = async (name, game) => {
    const res = await fetch("/api/tournaments", {
      method: "POST",
      body: JSON.stringify({ name, game }),
      headers: { "Content-Type": "application/json" },
    });
    const result = await res.json();
    return result;
  };
  return (
    <div className="p-10">
      {data.length ? (
        <Tournament data={data} />
      ) : (
        <NoTournament createUserTournament={createUserTournament} />
      )}
    </div>
  );
}

export default OrganizeComp;
