import TournamentsDAO from "../../../../dao/tournamentsDAO";

const handler = async (req, res) => {
  if (req.method !== "GET") {
    return res.status(404).end();
  }
  const searchStr = req.query.searchStr;
  const results = await TournamentsDAO.searchForTournaments(searchStr);
  return res.json(results);
};

export default handler;
