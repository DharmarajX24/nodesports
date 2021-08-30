import React from "react";
import OrganizeComp from "../../components/organize/OrganizeComp";
import { getSession, withPageAuthRequired } from "@auth0/nextjs-auth0";
import { connectToDatabase } from "../../lib/mongodb";

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps(context) {
    const {
      user: { sub: userId },
    } = getSession(context.req, context.res);

    const { db } = await connectToDatabase();
    const data = await db
      .collection("tournaments")
      .find(
        { createdBy: userId.split("|")[1] },
        { projection: { participants: 0 } }
      )
      .toArray();
    // Pass data to the page via props
    return { props: { data: JSON.parse(JSON.stringify(data)) } };
  },
});

export default function Organize({ user, data }) {
  return <OrganizeComp data={data} />;
}
