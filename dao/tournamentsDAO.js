import {connectToDatabase} from "../lib/mongodb";

export default class TournamentsDAO {
  static addTournament = async (tournament) => {
    const {db} = await connectToDatabase();
    return db.collection("tournaments").insertOne(tournament);
  };

  static updateTournament = async (tournamentId, data) => {
    const {db} = await connectToDatabase();
    return db.collection("tournaments").updateOne({tournamentId}, data);
  }

  static getTournamentById = async (tournamentId) => {
    const {db} = await connectToDatabase();
    return db.collection("tournaments").findOne({_id: tournamentId});
  };

  static getTournamentsByUser = async (userId) => {
    const {db} = await connectToDatabase()
    return db.collection("tournaments").find({userId}).toArray()
  }
}
