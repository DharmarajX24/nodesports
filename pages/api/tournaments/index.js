import TournamentsDAO from "../../../dao/tournamentsDAO";
import { getSession, withApiAuthRequired } from "@auth0/nextjs-auth0";

export default withApiAuthRequired(async (req, res) => {
  const {
    user: { sub: userId },
  } = getSession(req, res);
  const { method } = req;

  if (method === "GET") {
    // Get list of user's tournaments
    const tournaments = await TournamentsDAO.getTournamentsByUser(userId);
    return res.status(200).json({ data: tournaments });
  }

  if (method === "POST") {
    // Create a new tournament
    const {
      body: { name, game },
    } = req;
    const newTournamentId = await TournamentsDAO.addTournament(
      userId,
      name,
      game
    );
    return res.status(200).json({ data: newTournamentId });
  }
});
