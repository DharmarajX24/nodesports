import TournamentsDAO from "../../dao/tournamentsDAO";

export default async function handler(req, res) {
  const { method } = req;

  if (method === "POST") {
    // Create a new tournament
    const {
      body: { name },
    } = req;
    const newTournamentId = await TournamentsDAO.addTournament(name);
    return res.status(200).json({data: newTournamentId})
  }
}
