import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div className="grid text-white bg-primary ">
      <NavBar />
      <div>{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
