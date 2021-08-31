import { useRouter } from "next/router";
import { connectToDatabase } from "../../../lib/mongodb";
import { ObjectId } from "mongodb";
import TournamentDetails from "../../../components/browse/TournamentDetails";
import { getSession } from "@auth0/nextjs-auth0";

export const getServerSideProps = async (context) => {
  const {
    query: { id },
    req,
    res,
  } = context;
  const result = getSession(req, res);
  if(result === null) {
    return {
      props: {
        redirect: true
      }
    }
  }
  const user = result.user

  const { db } = await connectToDatabase();
  const data = await db
    .collection("tournaments")
    .findOne({ _id: new ObjectId(id) }, { projection: { createdBy: 0 } });

  if (!data) return { notFound: true };
  const { participants, ...rest } = data;
  // Pass data to the page via props
  return {
    props: {
      data: JSON.parse(
        JSON.stringify({
          ...rest,
          isParticipant: user && participants.includes(user.sub.split("|")[1]),
          participants: participants.map((p) => ({ name: `user_${p}`, id: p })),
        })
      ),
    },
  };
};

export default function BrowseTournamentPage({ data, redirect }) {
  const router = useRouter();
  if(redirect) {
      router.replace("/api/auth/login");
    return (
      <div></div>
    )
  }
  console.log(router.query);
  const { id } = router.query;
  console.log(data);
  return <TournamentDetails data={data} />;
}
