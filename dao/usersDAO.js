import { connectToDatabase } from "../lib/mongodb";

export default class UsersDAO {
  static addUser = async (user) => {
    const { db } = await connectToDatabase();
    return db.collection("users").insertOne(user);
  };
}
