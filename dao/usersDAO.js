import { connectToDatabase } from "../lib/mongodb";

export default class UsersDAO {
  static addUser = async (user) => {
    const { db } = await connectToDatabase();
    const { id, ...rest } = user;
    return db.collection("users").insertOne({ uid: id, ...rest });
  };
}
