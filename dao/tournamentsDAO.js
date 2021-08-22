import { connectToDatabase } from "../lib/mongodb";
import { ObjectId } from "mongodb";

export default class TournamentsDAO {
  static addTournament = async (userId, name, game) => {
    const { db } = await connectToDatabase();
    const newTournamentObj = {
      name,
      game,
      description: null,
      image: null,
      createdBy: userId,
      time: {
        start: 0,
        end: 0,
      },
      participants: [],
      rules: [],
      contact: {
        email: null,
        phone: null,
        twitter: null,
        discord: null,
      },
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
      `Updating ${tournamentId} by ${userId} with data ${JSON.stringify(data)}`
    );
    return db
      .collection("tournaments")
      .updateOne(
        { createdBy: userId, _id: new ObjectId(tournamentId) },
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
      .find({ createdBy: userId }, { projection: { participants: 0 } })
      .toArray();
  };

  static addParticipant = async (tournamentId, userId) => {
    const { db } = await connectToDatabase();
    return db
      .collection("tournaments")
      .updateOne(
        { _id: new ObjectId(tournamentId) },
        { $set: { $push: userId } }
      );
  };

  static removeParticipant = async (tournamentId, userId) => {
    const { db } = await connectToDatabase();
    return db
      .collection("tournaments")
      .updateOne(
        { _id: new ObjectId(tournamentId) },
        { $set: { $pull: userId } }
      );
  };
}
