import React from "react";
import Link from "next/link";

function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/browse">
            <a>Browse</a>
          </Link>
        </li>
        <li>
          <Link href="/organize">
            <a>Organize</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
