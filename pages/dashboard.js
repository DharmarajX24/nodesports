import { useUser } from "@auth0/nextjs-auth0";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

export default withPageAuthRequired(() => {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (user) {
    return (
      <>
        <div>Dashboard Page</div>
        <div>
          {user.name}! <a href="/api/auth/logout">Logout</a>
        </div>
      </>
    );
  }

  return <a href="/api/auth/login">Login</a>;
});
