import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div className="bg-primary text-white">
      <NavBar />
      <div className="grid min-h-screen grid-rows-minfullscreen">
        <div className="pt-20">{children}</div>
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
