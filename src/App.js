import React from "react";

import { Logo } from "./components/Logo";
import { GlobalStyle } from "./styles/GlobalStyles";
import { NavBar } from "./components/NavBar";

import { Router } from "@reach/router";
import { Home } from "./pages/Home";
import { Detail } from "./pages/Detail";
import { Favs } from "./pages/Favs";
import { User } from "./pages/User";
import { NotRegisteredUser } from "./pages/NotRegisteredUser";

import Context from "./Context";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Logo />

      <Router>
        <Home path="/" />
        <Home path="/pet" />
        <Home path="/pet/:categoryId" />
        <Detail path="/detail/:detailId" />
      </Router>

      <Context.Consumer>
        {({ isAuth }) =>
          isAuth ? (
            <Router>
              <Favs path="/favs" />
              <User path="/user" />
            </Router>
          ) : (
            <Router>
              <NotRegisteredUser path="/favs" />
              <NotRegisteredUser path="/user" />
            </Router>
          )
        }
      </Context.Consumer>

      <NavBar />
    </>
  );
};

export default App;
