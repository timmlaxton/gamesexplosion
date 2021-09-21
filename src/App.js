import React from "react";
import Home from "./pages/Home";
import Games from "./pages/Games";
import Search from "./components/Search";
import GameGenre from "./pages/GameGenre";
import Landing from "./pages/Landing";
import Nav from "./components/Nav";
import GlobalStyle from "./components/GlobalStyles";
import { Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      {/* <Search /> */}
      <Route exact path={["/game/:id", "/"]}>
        <Home />
      </Route>
      <Route path={["/game/:id", "/games"]}>
        <Games />
      </Route>
      <Route path={"/games/:genre"}>
        <GameGenre />
      </Route>
      <Route path={"/landing"}>
        <Landing />
      </Route>
    </div>
  );
}

export default App;
