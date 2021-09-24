import React from "react";
import Games from "./pages/Games";
import GameGenre from "./pages/GameGenre";
import Landing from "./pages/Landing";
import Nav from "./components/Nav";
import GlobalStyle from "./components/GlobalStyle";
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import "./App.css";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Route path="/games/:id">
          <Games />
        </Route>
        <Route path="/games/:genre">
          <GameGenre />
        </Route>
        <Route exact path="/">
          <Landing />
        </Route>
      </AnimatePresence>
    </div>
  );
}

export default App;
