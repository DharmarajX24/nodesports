import { useRouter } from "next/router";
import { getSession, withPageAuthRequired } from "@auth0/nextjs-auth0";
import { connectToDatabase } from "../../lib/mongodb";
import { ObjectId } from "mongodb";

export const getServerSideProps = async (context) => {
  const {
    user: { sub: userId },
  } = getSession(context.req, context.res);

  const { id } = context.query;

  console.log(context.query);

  let projection = {};

  if (userId != id.split("|")[1]) {
    projection = { name: 1, uid: 1 };
  }

  const { db } = await connectToDatabase();
  const data = await db
    .collection("users")
    .findOne({ uid: new ObjectId(id.split("|")[1]) }, projection);

  console.log(data);
  if (!data) return { notFound: true };
  // Pass data to the page via props
  return { props: { data: JSON.parse(JSON.stringify(data)) } };
};

export default function Userid() {
  const router = useRouter();
  const { id } = router.query;
  return <p>user: {id}</p>;
}
