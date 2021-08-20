import { useRouter } from "next/router";

const ManageTournament = () => {
  const router = useRouter();
  console.log(router.query);
  const { id } = router.query;
  console.log(id);

  return <p> You are in http://localhost:3000/organize/tournament/{id}</p>;
};

export default ManageTournament;
