import React, { useState } from "react";
import Overview from "../organize/Manage/Overview";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";
import { useUser } from "@auth0/nextjs-auth0";

function TournamentDetails({ data }) {
  const { user } = useUser();
  const router = useRouter();
  const [isParticipant, setIsParticipant] = useState(data.isParticipant);

  const joinTournament = async () => {
    if (!user) {
      router.push("/api/auth/login");
      return;
    }
    const res = await fetch(`/api/tournaments/${data._id}/participants`, {
      method: "POST",
    });
    const { data: result, error } = await res.json();
    result && setIsParticipant(true);
  };
  const leaveTournament = async () => {
    console.log("leave tournament called");
    const res = await fetch(`/api/tournaments/${data._id}/participants`, {
      method: "DELETE",
    });
    const { data: result, error } = await res.json();
    result && setIsParticipant(false);
    console.log(result);
  };

  return (
    <div className="max-w-4xl mx-auto py-20">
      <div className="flex justify-end pb-4">
        {isParticipant ? (
          <Button
            onClick={() => leaveTournament()}
            variant="contained"
            color="primary"
          >
            Leave Tournament
          </Button>
        ) : (
          <Button
            onClick={() => joinTournament()}
            variant="contained"
            color="secondary"
          >
            Join Tournament
          </Button>
        )}
      </div>
      <div className="mx-auto">
        <Overview data={data} />
      </div>
    </div>
  );
}

export default TournamentDetails;
