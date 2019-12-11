import React from "react";
import Navbar from "./component/navbar";
import "./App.css";

const menu = [
  { title: "Home" },
  {
    title: "services",
    drop: ["For entrepreneurs", "For Students", "For hobbyists"]
  },
  { title: "contact" }
];

function App() {
  return <Navbar item={menu} />;
}

export default App;
