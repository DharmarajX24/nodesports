import TournamentsDAO from "../../../dao/tournamentsDAO";

export default async function handler(req, res) {
  const { id } = req.query;
  const data = await TournamentsDAO.getTournamentById(id);
  return res.status(200).json({ data });
}
