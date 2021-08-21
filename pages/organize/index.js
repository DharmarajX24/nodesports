import React from "react";
import OrganizeComp from "../../components/organize/OrganizeComp";
import { getSession, withPageAuthRequired } from "@auth0/nextjs-auth0";
import { connectToDatabase } from "../../lib/mongodb";

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps(context) {
    const {
      user: { sub: userId },
    } = getSession(context.req, context.res);
    console.log("server side user", userId);

    const { db } = await connectToDatabase();
    const data = (
      await db
        .collection("tournaments")
        .find({ createdBy: userId }, { projection: { participants: 0 } })
        .toArray()
    ).map(({ _id, ...rest }) => ({ id: _id.toString(), ...rest }));
    // Pass data to the page via props
    return { props: { data } };
  },
});

export default function Organize({ user, data }) {
  return <OrganizeComp data={data} />;
}
