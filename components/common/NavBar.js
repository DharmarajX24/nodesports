import React, { useState } from "react";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0";
import Avatar from "@material-ui/core/Avatar";
import { useRouter } from "next/router";

function NavBar() {
  const { user, error, isLoading } = useUser();
  const router = useRouter();
  const [showMenu, setShowMenu] = useState(false);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <nav className=" py-2  absolute z-10">
      <div className="grid-cols-2 grid w-screen items-baseline justify-between">
        <ul className="flex items-baseline self-center">
          <li className="px-1 sm:px-6 md:px-10 xl:px-20 font-banger ">
            <Link href="/">
              <a className="text-lg sm:text-2xl md:text-3xl  font-black ">
                <span>Node</span>
                <span className="text-branding">sports</span>
              </a>
            </Link>
          </li>
          <li className="px-1 sm:px-6 md:px-10 xl:px-20">
            <Link href="/browse">
              <a
                className={`sm:text-xl md:text-2xl font-bold text-white hover:text-secondarybranding ${
                  router.pathname === "/browse" && "underline"
                }`}
              >
                Browse
              </a>
            </Link>
          </li>
          <li className="px-1 sm:px-6 md:px-10 xl:px-20">
            <Link href="/organize">
              <a
                className={`sm:text-xl md:text-2xl font-bold text-white hover:text-secondarybranding ${
                  router.pathname === "/organize" && "underline"
                }`}
              >
                Organize
              </a>
            </Link>
          </li>
        </ul>
        <div className="px-6 text-right">
          {user ? (
            <div className="">
              <button onClick={() => setShowMenu(!showMenu)}>
                <Avatar alt="Cindy Baker" src={user.picture} />
              </button>
              {showMenu && (
                <div
                  className="origin-top-right text-left absolute z-40 right-4 p-2 mt-2 w-56 rounded-md shadow-lg bg-secondary ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                  tabIndex="-1"
                >
                  <div className="" role="none">
                    <div className="text-white block px-4 py-2 text-sm hover:bg-secondarybranding">
                      Profile
                    </div>
                  </div>
                  <div className="py-1" role="none">
                    <Link href="/api/auth/logout">
                      <a className="text-branding block px-4 py-2 text-sm hover:text-white hover:bg-branding">
                        Logout
                      </a>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <Link href="/api/auth/login">
              <a className="bg-secondarybranding font-medium px-3 sm:px-6 py-1 rounded hover:bg-white hover:text-secondarybranding hover:border-branding hover:border-2 hover:border-solid">
                Login
              </a>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
