import UsersDAO from "../../dao/usersDAO";

export default async function handler(req, res) {
  const {
    method,
    headers: { authorization },
    body: user,
  } = req;

  if (method === "POST") {
    // Add new user to database
    // Check if request is triggered by Auth0 hooks
    const [type, token] = authorization.split(" ");

    if (type !== "Bearer" || token !== process.env.AUTH0_WEBHOOK_SECRET) {
      return res.status(401).send({ error: "Unauthorized" });
    }

    console.log("Adding user to database", user);
    await UsersDAO.addUser(user);
    return res.status(200).send({ data: "User added" });
  }
}
