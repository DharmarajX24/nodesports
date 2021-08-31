import { connectToDatabase } from "../lib/mongodb";

export default class UsersDAO {
  static addUser = async (user) => {
    const { db } = await connectToDatabase();
    console.log("user", user);
    const { id: uid, ...rest } = user;
    return db.collection("users").insertOne({ uid, ...rest });
  };

static addParticipantInUserCollection = async (tournamentId) => {
  const { db } = await connectToDatabase();
  return db
    .collection("users")
    .updateOne(
      { _id: new ObjectId(tournamentId) },
      {
        $addToSet: {
          tournaments: tournamentId,
        },
      }
    );
};
}