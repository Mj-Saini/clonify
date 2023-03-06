import React, { useContext, useState } from "react";
import "./App.css";
import "./Root.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Header from "./components/Header";
import Loader from "./components/Loader";
import MoveToTop from "./components/MoveToTop";
import Mode from "./components/Mode";
import { theTheme } from "./components/Providers";
function App() {
  const { theme, setTheme } = useContext(theTheme);
  return (
    <>
      <div className={theme ? "bg-dark" : "bg-light"}>
        {/* <button onClick={() => setTheme(!theme)}>on/off</button> */}
        <Mode />
        <MoveToTop />
        <Loader />
        <Header />
      </div>
    </>
  );
}

export default App;
