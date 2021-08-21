import { useRouter } from "next/router";
import { getSession, withPageAuthRequired } from "@auth0/nextjs-auth0";
import { connectToDatabase } from "../../../lib/mongodb";

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps(context) {
    const {
      user: { sub: userId },
    } = getSession(context.req, context.res);

    const { id } = context.query;

    const { db } = await connectToDatabase();
    const data = await db
      .collection("tournaments")
      .findOne({ _id: id, createdBy: userId });
    console.log(data);

    if (!data) return { notFound: true };
    return { props: { data } };
  },
});

export default function ManageTournament({ data }) {
  const router = useRouter();
  console.log(router.query);
  const { id } = router.query;
  console.log(id);

  return <p> You are in http://localhost:3000/organize/tournament/{id}</p>;
}
