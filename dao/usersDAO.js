import { connectToDatabase } from "../lib/mongodb";

export default class UsersDAO {
  static addUser = async (user) => {
    const { db } = await connectToDatabase();
    console.log("user", user);
    const { id: uid, ...rest } = user;
    console.log(uid, rest);
    return db.collection("users").insertOne({ uid, ...rest });
  };
}
