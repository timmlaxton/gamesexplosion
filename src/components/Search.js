import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import explosion from "../img/explosion.png";
import { fetchSearch } from "../actions/gamesActions";
import { useDispatch } from "react-redux";

const Search = () => {
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState("");

  const inputHandler = (e) => {
    setTextInput(e.target.value);
  };

  const submitSearch = (e) => {
    e.preventDefault();
    dispatch(fetchSearch(textInput));
    setTextInput("");
  };

  const clearSearch = () => {
    dispatch({ type: "CLEAR_SEARCHED" });
  };

  return (
    <SearchBar>
      <Logo onClick={clearSearch}>
        <img src={explosion} alt="logo" />
      </Logo>
      <form className="search">
        <input value={textInput} onChange={inputHandler} type="text" />
        <button onClick={submitSearch} type="submit">
          Search
        </button>
      </form>
    </SearchBar>
  );
};

const SearchBar = styled(motion.nav)`
  padding: 3rem 5rem;
  text-align: center;
  input {
    height: 10%;
    width: 50%;
    font-size: 1.5rem;
    padding: 0.5rem;
    border: solid 3px #000;
    margin-top: 1rem;
    text-decoration: none;
    color: #000;
  }
  input:focus {
    outline: none;
  }
  button {
    font-size: 1.5rem;
    padding: 0.5rem 2rem;
    cursor: pointer;
    background: #e5e5e5;
    color: #000;
    border: none;
  }
`;

const Logo = styled(motion.nav)`
  display: flex;
  justify-content: center;
  padding: 1rem;
  cursor: pointer;
`;

export default Search;
