import Button from "@material-ui/core/Button";
import { useState } from "react";

function Participants({ data, id }) {
  const [participants, setParticipants] = useState(data.participants);
  const isParticipants = participants.length;
  if (!isParticipants) return <div>No one has joined your tournament yet.</div>;

  const removeUser = async (person, index) => {
    const res = await fetch(`/api/tournaments/${id}/participants`, {
      body: JSON.stringify({ userId: person }),
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    const { data: result, error } = await res.json();
    console.log(result);
    if (!error) setParticipants(participants.splice(index, 1));
  };

  return (
    <div className="">
      <div className="p-2">Participants tab</div>
      <div>
        {participants.map((person, i) => (
          <div
            className="bg-secondary p-2 my-2 grid grid-cols-searchBarAndBtnColums"
            key={person}
          >
            <div>{person}</div>
            <Button
              onClick={() => removeUser(person, i)}
              variant="contained"
              color="primary"
            >
              remove user
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Participants;
