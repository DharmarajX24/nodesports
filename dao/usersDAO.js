import { connectToDatabase } from "../lib/mongodb";

export default class UsersDAO {
  static addUser = async (user) => {
    const { db } = await connectToDatabase();
    console.log("user", user)
    const { id: uid, ...rest } = user;
    return db.collection("users").insertOne({ uid, ...rest });
  };
}
