import { useRouter } from "next/router";
import { getSession } from "@auth0/nextjs-auth0";
import { connectToDatabase } from "../../lib/mongodb";

export const getServerSideProps = async (context) => {
  const {
    user: { sub: userId },
  } = getSession(context.req, context.res);

  let { id } = context.query;

  if (id.includes("|")) id = id.split("|")[1];

  let projection = {};

  if (userId != id) {
    projection = { name: 1, uid: 1 };
  }

  const { db } = await connectToDatabase();
  const data = await db.collection("users").findOne({ uid: id }, projection);

  console.log(data);
  if (!data) return { notFound: true };
  // Pass data to the page via props
  return { props: { data: JSON.parse(JSON.stringify(data)) } };
};

export default function Userid({data}) {
  console.log(data)
  const router = useRouter();
  const { id } = router.query;
  return <p>user: {id}</p>;
}
