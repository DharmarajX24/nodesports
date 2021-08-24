import React, { useState } from "react";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0";
import Avatar from "@material-ui/core/Avatar";

function NavBar() {
  const { user, error, isLoading } = useUser();
  const [showMenu, setShowMenu] = useState(false);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;


  console.log(user);
  return (
    <nav className="px-10 py-2 flex items-baseline justify-between">
      <ul className="flex items-baseline">
        <li className="px-10 ">
          <Link href="/">
            <a className="text-2xl font-black italic">
              <span>Node</span>
              <span className="text-branding">sports</span>
            </a>
          </Link>
        </li>
        <li className="px-10">
          <Link href="/browse">
            <a className="text-xl font-bold text-greytext hover:text-branding ">
              Browse
            </a>
          </Link>
        </li>
        <li className="px-10">
          <Link href="/organize">
            <a className="text-xl font-bold text-greytext hover:text-branding ">
              Organize
            </a>
          </Link>
        </li>
      </ul>
      <div className="px-6">
        {user ? (
          <div className="relative inline-block text-left">
            <button onClick={() => setShowMenu(!showMenu)}>
              <Avatar alt="Cindy Baker" src={user.picture} />
            </button>
            {showMenu && (
              <div
                className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-secondary ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
                tabIndex="-1"
              >
                <div className="py-1" role="none">
                  <div className="text-white block px-4 py-2 text-sm hover:text-secondarybranding">
                    Profile
                  </div>
                </div>
                <div className="py-1" role="none">
                  <Link href="/api/auth/logout">
                    <a className="text-white block px-4 py-2 text-sm hover:text-secondarybranding">Logout</a>
                  </Link>
                </div>
              </div>
            )}
          </div>
        ) : (
          <Link href="/api/auth/login">
            <a className="bg-secondarybranding font-medium  px-6 py-1 rounded hover:bg-white hover:text-secondarybranding hover:border-branding hover:border-2 hover:border-solid">
              Login
            </a>
          </Link>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
