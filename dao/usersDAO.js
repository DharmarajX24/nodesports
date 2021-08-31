import { connectToDatabase } from "../lib/mongodb";
import { ObjectId } from "mongodb";

export default class UsersDAO {
  static addUser = async (user) => {
    const { db } = await connectToDatabase();
    console.log("user", user);
    const { id: uid, ...rest } = user;
    return db.collection("users").insertOne({ uid, ...rest });
  };

static addParticipantInUserCollection = async (tournamentId,userId) => {
  const { db } = await connectToDatabase();
  return db
    .collection("users")
    .insertOne(
      { _id: new ObjectId(userId.split("|")[1]) },
      {
        $addToSet: {
          tournaments: tournamentId,
        },
      }
    );
};
}