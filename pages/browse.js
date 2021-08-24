import BrowseComp from "../components/browse/BrowseComp";
import { connectToDatabase } from "../lib/mongodb";

export const getServerSideProps = async () => {
  const { db } = await connectToDatabase();
  const data = await db
    .collection("tournaments")
    .find({})
    .project({ createdBy: 0 })
    .sort({ createdAt: -1 })
    .limit(20)
    .toArray();
  console.log(data);

  if (!data) return { notFound: true };
  return { props: { data: JSON.parse(JSON.stringify(data)) } };
};

export default function Browse({ data }) {
  console.log(data);
  return <BrowseComp data={data} />;
}
