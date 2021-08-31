import { useRouter } from "next/router";
import { getSession, withPageAuthRequired } from "@auth0/nextjs-auth0";
import { connectToDatabase } from "../../../lib/mongodb";
import { ObjectId } from "mongodb";
import ManageTabPanel from "../../../components/organize/Manage/ManageTabPanel";

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps(context) {
    const {
      user: { sub: userId },
    } = getSession(context.req, context.res);

    const { id } = context.query;

    if (!id.match(/^[0-9a-fA-F]{24}$/)) return { notFound: true };

    const { db } = await connectToDatabase();
    const data = await db
      .collection("tournaments")
      .findOne({ _id: new ObjectId(id), createdBy: userId.split("|")[1] });
    console.log(data);

    if (!data) return { notFound: true };
    return { props: { data: JSON.parse(JSON.stringify(data)) } };
  },
});

export default function ManageTournament({ data }) {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div className="py-10">
      <ManageTabPanel data={data} id={id} />
    </div>
  );
}
