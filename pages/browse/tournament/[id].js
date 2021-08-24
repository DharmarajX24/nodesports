// import { useRouter } from "next/router";
// import { getSession, withPageAuthRequired } from "@auth0/nextjs-auth0";
// import { connectToDatabase } from "../../../lib/mongodb";
// import { ObjectId } from "mongodb";


export default function BrowseTournamentPage({ data }) {
  const router = useRouter();
  console.log(router.query);
  const { id } = router.query;
  console.log({ data });
  return (
    <div className="py-10">
        {}
    </div>
  );
}
