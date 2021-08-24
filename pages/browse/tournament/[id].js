import { useRouter } from "next/router";
import { connectToDatabase } from "../../../lib/mongodb";
import { ObjectId } from "mongodb";

export const getServerSideProps = async (context) => {
  const { tournamentId } = context.query;

  const { db } = await connectToDatabase();

  const data = await db
    .collection("tournaments")
    .findOne(
      { _id: new ObjectId(tournamentId) },
      { projection: { createdBy: 0 } }
    );

  if (!data) return { notFound: true };
  // Pass data to the page via props
  return { props: { data: JSON.parse(JSON.stringify(data)) } };
};

export default function BrowseTournamentPage({ data }) {
  const router = useRouter();
  console.log(router.query);
  const { id } = router.query;
  console.log(data);
  return <div className="py-10">{}</div>;
}
