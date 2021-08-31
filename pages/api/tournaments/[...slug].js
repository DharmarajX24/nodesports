import TournamentsDAO from "../../../dao/tournamentsDAO";
import { getSession, withApiAuthRequired } from "@auth0/nextjs-auth0";

export default withApiAuthRequired(async (req, res) => {
  const {
    query: { slug },
    method,
    body: data,
  } = req;

  console.log("Slug", slug);

  if (!slug[0].match(/^[0-9a-fA-F]{24}$/)) {
    return res.status(400).json({ error: "Invalid Tournament ID" });
  }

  const {
    user: { sub: userId },
  } = getSession(req, res);

  switch (slug.length) {
    case 1:
      if (method === "PATCH") {
        await TournamentsDAO.updateTournament(userId, slug[0], data);
        return res.status(200).json({ data: `Tournament ${slug[0]} updated` });
      }
      break;
    case 2:
      if (slug[1] === "participants") {
        switch (method) {
          case "POST":
            await TournamentsDAO.addParticipant(slug[0], userId);
            return res
              .status(200)
              .json({ data: `User ${userId} added to tournament ${slug[0]}` });
          case "DELETE":
            await TournamentsDAO.removeParticipant(slug[0], data.userId);
            return res.status(200).json({
              data: `User ${userId} removed from tournament ${slug[0]}`,
            });
          default:
            break;
        }
      }
      break;
    default:
      break;
  }
  return res.status(404).end();
});
