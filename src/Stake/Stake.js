import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header";
import Launchcards from "../Launchcards";
import Listactive from "../Listactive";
import StakeCards from "./StakeCards";

export default function () {
  return (
    <div className="bgimg">
      <Header />
      <StakeCards />
    </div>
  );
}
