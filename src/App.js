import React from "react";
import GameDetails from "./components/GamesDetails";
import GameGenre from "./pages/GameGenre";
import Home from "./pages/Home";
import Landing from "./pages/Landing";
import Nav from "./components/Nav";
import GlobalStyle from "./components/GlobalStyle";
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle />

      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/game" component={Home} exact />
          <Route path="/games/:genre" component={GameGenre} />
          <Route path="/" component={Landing} exact />
          <Route path="/game/:id" component={GameDetails} exact />
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
