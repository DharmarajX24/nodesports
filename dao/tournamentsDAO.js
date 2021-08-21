import { connectToDatabase } from "../lib/mongodb";

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
    };
    const { insertedId } = await db
      .collection("tournaments")
      .insertOne(newTournamentObj);
    console.log(`New tournament ID: ${insertedId}`);
    return insertedId;
  };

  static updateTournament = async (tournamentId, data) => {
    const { db } = await connectToDatabase();
    return db.collection("tournaments").updateOne({ tournamentId }, data);
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
}
