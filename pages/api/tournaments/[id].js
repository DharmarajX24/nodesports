import TournamentsDAO from "../../../dao/tournamentsDAO";
import { getSession, withApiAuthRequired } from "@auth0/nextjs-auth0";

export default withApiAuthRequired(async (req, res) => {
  const {
    user: { sub: userId },
  } = getSession(req, res);

  const {
    query: { id },
    method,
    body: data,
  } = req;

  console.log(id, userId);

  if (method === "PATCH") {
    await TournamentsDAO.updateTournament(userId, id, data);
    return res.status(200).json({ data: `Tournament ${id} updated` });
  }
});
