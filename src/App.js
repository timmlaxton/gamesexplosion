import React from "react";
import Home from "./pages/Home";
import GameGenre from "./pages/GameGenre";
import Landing from "./pages/Landing";
import Nav from "./components/Nav";
import GlobalStyle from "./components/GlobalStyle";
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch>
          <Route exact path="/game">
            <Home />
          </Route>
          <Route exact path="/games/:genre">
            <GameGenre />
          </Route>
          <Route exact path="/">
            <Landing />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
