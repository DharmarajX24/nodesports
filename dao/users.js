import { mongo } from "../init/mongodb";

const usersCol = mongo().collection("users");

export default class UsersDAO {
    static addUser = async (user) => {
        return usersCol.insertOne(...user)
    }
}
