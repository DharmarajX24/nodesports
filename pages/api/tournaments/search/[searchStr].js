import { getSession, withApiAuthRequired } from "@auth0/nextjs-auth0";
import TournamentsDAO from "../../../../dao/tournamentsDAO";

export default withApiAuthRequired(async (req, res) => {
  if (req.method !== "GET") {
    return res.status(404).end();
  }
  const {
    user: { sub: userId },
  } = getSession(req, res);
  const searchStr = req.query.searchStr;
  const results = await TournamentsDAO.searchForTournaments(searchStr, userId);
  return res.json(results);
});
