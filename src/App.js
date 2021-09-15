import React from "react";
import Home from "./pages/Home";
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
      <Search />
      <Route path={["/game/:id", "/"]}>
        <Home />
      </Route>
    </div>
  );
}

export default App;
