import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadGames } from "./actions/gamesActions";
import "./App.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);
  return (
    <div className="App">
      <h1>Pop</h1>
    </div>
  );
}

export default App;
