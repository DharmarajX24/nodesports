import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div className="bg-primary text-white">
      <NavBar />
      <div className="pt-20">{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
