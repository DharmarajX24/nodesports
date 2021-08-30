import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <footer className="p-10 bg-secondary">
      <ul className="flex flex-col justify-center items-center">
        <li>
          <Link href="/">
            <a className="sm:text-xl md:text-2xl  font-black ">
              <span>Node</span>
              <span className="text-branding">sports</span>
            </a>
          </Link>
        </li>
        <div className="flex flex-wrap pt-3">
          <li className="px-1 sm:px-2 md:px-4 xl:px-6">
            <Link href="/">
              <a className="sm:text-lg md:text-xl  text-white hover:text-secondarybranding">
                Home
              </a>
            </Link>
          </li>
          <li className="px-1 sm:px-2 md:px-4 xl:px-6">
            <Link href="/browse">
              <a className="sm:text-lg md:text-xl  text-white hover:text-secondarybranding">
                Browse
              </a>
            </Link>
          </li>
          <li className="px-1 sm:px-2 md:px-4 xl:px-6">
            <Link href="/organize">
              <a className="sm:text-lg md:text-xl  text-white hover:text-secondarybranding">
                Organize
              </a>
            </Link>
          </li>
          <li className="px-1 sm:px-2 md:px-4 xl:px-6">
            <Link href="/">
              <a className="sm:text-lg md:text-xl  text-white hover:text-secondarybranding">
                Privacy Policy
              </a>
            </Link>
          </li>
          <li className="px-1 sm:px-2 md:px-4 xl:px-6">
            <a
              href="https://github.com/DharmarajX24/nodesports"
              className="sm:text-lg md:text-xl  text-white hover:text-secondarybranding"
            >
              Github
            </a>
          </li>
        </div>
      </ul>
      <small className="pt-3 block text-center">
        Copyright © nodesports {new Date().getFullYear()}
      </small>
    </footer>
  );
}

export default Footer;
