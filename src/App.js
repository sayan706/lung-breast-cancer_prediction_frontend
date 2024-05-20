import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <React.Fragment>
          <div>
            <Toaster />
          </div>
          <Outlet />
        </React.Fragment>
      </div>
    </>
  );
}

export default App;
