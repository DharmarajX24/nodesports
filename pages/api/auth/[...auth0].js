import { handleAuth, handleLogin } from "@auth0/nextjs-auth0";

export default handleAuth({
  async login(req, res) {
    try {
      await handleLogin(req, res, {
        returnTo: process.env.AUTH0_RETURN_URL,
        authorizationParams: { audience: process.env.AUTH0_AUD },
      });
    } catch (error) {
      res.status(error.status || 500).end(error.message);
    }
  },
});
