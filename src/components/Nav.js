import React from "react";
import styled from "styled-components";
import { FramerTreeLayoutContext, motion } from "framer-motion";
import explosion from "../img/explosion.png";

const Nav = () => {
  return (
    <SearchBar>
      <Logo>
        <img src={explosion} alt="logo" />
      </Logo>
      <div className="search">
        <input type="" />
        <button>Search</button>
      </div>
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

export default Nav;
