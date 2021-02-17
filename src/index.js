import React from "react";
import ReactDom from "react-dom";
import Navbar from "./components/Navbar";
import "./globalStyled.css";
import QAcomponent from "./pages/Q&A";

const Index = () => {
  return (
    <>
      <Navbar />
      <QAcomponent></QAcomponent>
    </>
  );
};

ReactDom.render(<Index />, document.getElementById("root"));
