import React from "react";
import Link from "next/link";

function NavBar() {
  return (
    <nav className="px-10 py-2 flex items-baseline justify-between">
      <ul className="flex items-baseline">
        <li className="px-10 ">
          <Link href="/">
            <a className="text-2xl font-black">
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
        <a
          className="bg-branding font-medium  px-6 py-1 rounded hover:bg-white hover:text-branding hover:border-branding hover:border-2 hover:border-solid"
          href="/api/auth/login"
        >
          Login
        </a>
      </div>
    </nav>
  );
}

export default NavBar;
