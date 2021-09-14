import React from "react";
import Home from "./pages/Home";
import GlobalStyle from "./components/GlobalStyles";
import { Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Route path={["/game/:id", "/"]}>
        <Home />
      </Route>
    </div>
  );
}

export default App;
