import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../img/explosion.png";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { fetchSearch } from "../actions/gamesActions";
import { useDispatch } from "react-redux";

const NavSearch = () => {
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState("");

  const { pathname } = useLocation();

  const inputHandler = (e) => {
    setTextInput(e.target.value);
  };

  const submitSearch = (e) => {
    e.preventDefault();
    dispatch(fetchSearch(textInput));
    setTextInput("");
  };
  return (
    <StyledNav>
      <img src={logo} alt="explosion" />
      <h1>
        <Link to="/">Games Explosion</Link>
      </h1>
      <form className="search">
        <input value={textInput} onChange={inputHandler} type="text" />
        <button onClick={submitSearch} type="submit">
          Search
        </button>
      </form>
      <ul>
        <li>
          <Link to="/game">Games</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/game" ? "40%" : "0%" }}
          />
        </li>
        <li>
          <Link to="/games/action">Action</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/games/action" ? "40%" : "0%" }}
          />
        </li>
        <li>
          <Link to="/games/puzzle">Puzzle</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/games/puzzle" ? "40%" : "0%" }}
          />
        </li>
        <li>
          <Link to="/games/shooter">Shooter</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/games/shooter" ? "40%" : "0%" }}
          />
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  min-height: 20vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background: #282828;
  position: sticky;
  top: 0;
  z-index: 10;

  img {
    width: 5%;
  }

  input {
    font-size: 1.5rem;
    padding: 0.4rem;
    border: none;
    outline: none;
    font-weight: bold;
    font-family: "Rubik", sans-serif;
    border-radius: 10px;
    margin-left: 11px;
  }

  button {
    font-size: 1.1rem;
    border: none;
    padding: 0.71rem 1.6rem;
    cursor: pointer;
    background: #ff0099;
    color: #fff;
    position: relative;
    bottom: 1px;
    border-radius: 10px;
    margin-left: 4px;
  }

  a {
    color: white;
    text-decoration: none;
  }
  ul {
    display: flex;
    list-style: none;
  }
  #logo {
    font-size: 1.5rem;
    font-family: "Rubik", cursive;
    font-weight: lighter;
  }
  li {
    padding-left: 5rem;
    position: relative;
  }
  @media (max-width: 1300px) {
    flex-direction: column;
    padding: 2rem 1rem;
    h1 {
      display: inline-block;
      margin: 1rem;
      padding: 1rem 0;
    }
    ul {
      padding: 2rem;
      justify-content: space-around;
      width: 100%;
      li {
        padding: 0;
      }
    }
  }
`;

const Line = styled(motion.div)`
  height: 0.3rem;
  background: #ff0099;
  width: 0%;
  position: absolute;
  bottom: -80%;
  left: 60%;
  @media (max-width: 1300px) {
    left: 0%;
  }
`;

export default NavSearch;
