import Button from "@material-ui/core/Button";

function Participants({ data }) {
  console.log(data);
  const isParticipants = data.participants.length;
  if (!isParticipants) return <div>No one has joined your tournament yet.</div>;

  const removeUser = async (person) => {
    const res = await fetch(`/api/tournaments/${person}/participants`, {
      method: "DELETE",
    });
    const { data: result, error } = await res.json();
    console.log(result);
  };

  return (
    <div className="">
      <div className="p-2">Participants tab</div>
      <div>
        {data.participants.map((person) => (
          <div
            className="bg-secondary p-2 my-2 grid grid-cols-searchBarAndBtnColums"
            key={person}
          >
            <div>{person}</div>
            <Button
              onClick={() => removeUser(person)}
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
