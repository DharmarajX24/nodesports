import React from "react";
import NavBar from "./NavBar";

function Layout({ children }) {
  return (
    <div className="bg-primary text-white min-h-screen">
      <NavBar />
      {children}
    </div>
  );
}

export default Layout;
