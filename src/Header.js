import React from "react";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Logo from "./images/logo.png";

const Header = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg ">
        <img src={Logo} class="img-fluid logoheader" alt="..." width="5%" height="5%" />
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <Link to="/">
              <li class="nav-item active">
                <a class="nav-link" href="#">
                  Launchpad<span class="sr-only">(current)</span>
                </a>
              </li>
            </Link>
            <Link to="/stake">
              <li class="nav-item active">
                <a class="nav-link" href="#">
                  Stake<span class="sr-only">(current)</span>
                </a>
              </li>
            </Link>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <button
              class="btn btn-outline-success mr-sm-2 btn2 btn-sm"
              type="button"
            >
              BSC
            </button>
            <button
              class="btn btn-outline-success mr-sm-2 btn1 btn-sm"
              type="button"
            >
              {" "}
              0 Token
            </button>
            <button
              class="btn btn-outline-success mr-sm-2 btn1 btn-sm"
              type="button"
            >
              0 BNBT
            </button>
            <button
              class="btn btn-outline-success my-2 my-sm-0 btn3 btn-sm"
              type="button"
            >
              0x56fo...898
            </button>
          </form>
        </div>
      </nav>
      <div data-v-fa77f052="" class="menu">
        <div data-v-fa77f052="" class="menu__subline subline">
          <div data-v-fa77f052="" class="subline__left subline__sheel">
            <div data-v-fa77f052="" class="subline__seed"></div>
          </div>
          <div data-v-fa77f052="" class="subline__line"></div>{" "}
          <div data-v-fa77f052="" class="subline__right"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
