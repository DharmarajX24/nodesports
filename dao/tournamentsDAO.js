import { connectToDatabase } from "../lib/mongodb";
import { ObjectId } from "mongodb";

export default class TournamentsDAO {
  static addTournament = async (userId, name, game) => {
    const { db } = await connectToDatabase();
    const newTournamentObj = {
      name,
      game,
      description: "",
      image: "",
      createdBy: userId.split("|")[1],
      time: {
        start: 0,
        end: 0,
      },
      participants: [],
      rules: [],
      contact: {
        email: "",
        phone: "",
        twitter: "",
        discord: "",
      },
      platform: "",
      region: "",
    };
    const { insertedId } = await db
      .collection("tournaments")
      .insertOne(newTournamentObj);
    console.log(`New tournament ID: ${insertedId}`);
    return insertedId;
  };

  static updateTournament = async (userId, tournamentId, data) => {
    const { db } = await connectToDatabase();
    console.log(
      `Updating ${tournamentId} by ${
        userId.split("|")[1]
      } with data ${JSON.stringify(data)}`
    );
    return db
      .collection("tournaments")
      .updateOne(
        { createdBy: userId.split("|")[1], _id: new ObjectId(tournamentId) },
        { $set: data }
      );
  };

  static getTournamentById = async (tournamentId) => {
    const { db } = await connectToDatabase();
    return db.collection("tournaments").findOne({ _id: tournamentId });
  };

  static getTournamentsByUser = async (userId) => {
    const { db } = await connectToDatabase();
    return db
      .collection("tournaments")
      .find(
        { createdBy: userId.split("|")[1] },
        { projection: { participants: 0 } }
      )
      .toArray();
  };

  static addParticipant = async (tournamentId, userId) => {
    const { db } = await connectToDatabase();
    return db
      .collection("tournaments")
      .updateOne(
        { _id: new ObjectId(tournamentId) },
        {
          $addToSet: {
            participants: userId.split("|")[1],
            rows: {
              id: userId.split("|")[1],
              col1: "-",
              col2: userId.split("|")[1],
              col3: 0,
            },
          },
        }
      );
  };

  static removeParticipant = async (tournamentId, userId) => {
    const { db } = await connectToDatabase();
    return db
      .collection("tournaments")
      .updateOne(
        { _id: new ObjectId(tournamentId) },
        { $pull: { participants: userId } }
      );
  };

  static searchForTournaments = async (searchStr, userId) => {
    const { db } = await connectToDatabase();
    const findObj = {
      name: {
        $regex: searchStr,
      },
    };
    if (userId) {
      findObj["createdBy"] = userId.slice(6);
    }
    console.log({ findObj });
    return db.collection("tournaments").find(findObj).toArray();
  };
}
