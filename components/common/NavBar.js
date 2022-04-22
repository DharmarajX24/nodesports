import React, { useState } from "react";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0";
import Avatar from "@mui/material/Avatar";
import { useRouter } from "next/router";

function NavBar() {
  const { user, error, isLoading } = useUser();
  const router = useRouter();
  const [showMenu, setShowMenu] = useState(false);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  return (
    <nav className="py-2">
      <div className="grid items-baseline justify-between w-screen grid-cols-2">
        <ul className="flex items-baseline self-center">
          <li className="px-1 sm:px-6 md:px-10 xl:px-20 ">
            <Link href="/">
              <a className="text-lg font-black sm:text-2xl md:text-3xl ">
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
                  className="absolute z-40 w-56 p-2 mt-2 text-left origin-top-right rounded-md shadow-lg right-4 bg-secondary ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                  tabIndex="-1"
                >
                  <div className="" role="none">
                    <Link href={`/users/${user.sub.split("|")[1]}`}>
                      <a className="block px-4 py-2 text-sm text-white hover:bg-secondarybranding">
                        Profile
                      </a>
                    </Link>
                  </div>
                  <div className="py-1" role="none">
                    <Link href="/api/auth/logout">
                      <a className="block px-4 py-2 text-sm text-branding hover:text-white hover:bg-branding">
                        Logout
                      </a>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <Link href="/api/auth/login">
              <a className="px-3 py-1 font-medium rounded bg-secondarybranding sm:px-6 hover:bg-white hover:text-secondarybranding hover:border-branding hover:border-2 hover:border-solid">
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
