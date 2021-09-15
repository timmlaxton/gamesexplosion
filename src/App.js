import React from "react";
import Home from "./pages/Home";
import Games from "./pages/Games";
import Search from "./components/Search";
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
      <Route path={["/game/:id", "/"]}>
        <Home />
      </Route>
      <Route path={["/game/:id", "/"]}>
        <Games />
      </Route>
    </div>
  );
}

export default App;
