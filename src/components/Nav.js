import React from "react";
import styled from "styled-components";
import logo from "../img/explosion.png";
import { motion } from "framer-motion";

const Nav = () => {
  return (
    <StyledNav>
      <img src={logo} alt="explosion" />

      <h1>
        <a href="/">Games Explosion</a>
      </h1>
      <div className="search">
        <input type="text" />
        <button>Search</button>
      </div>
      <ul>
        <li>
          <a href="/game">Games</a>
        </li>
        <li>
          <a href="/games/action">Action</a>
        </li>
        <li>
          <a href="/games/puzzle">Puzzle</a>
        </li>
        <li>
          <a href="/games/shooter">Shooter</a>
        </li>
      </ul>
    </StyledNav>

    // <StyledNav>

    //   <div className="search">
    //     <input type="text" />
    //     <button>Search</button>
    //   </div>
    // </StyledNav>
  );
};

// const StyledNav = styled(motion.div)`
//   padding: 3rem 5rem;
//   text-align: center;

//   h1 {
//     font-family: "Rubik", sans-serif;
//     margin-top: 15px;
//     font-size: 40px;
//   }
// `;

//   img {
//     width: 5rem;
//     height: 5rem;
//     margin-right: 15px;
//     margin-top: 10px;
//   }
// `;

const StyledNav = styled.nav`
  min-height: 20vh;
  min-width: 100%;
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
    margin-left: 1%;
    left: 0;
    top: 0;
  }

  input {
    font-size: 1.5rem;
    padding: 0.4rem;
    border: none;
    outline: none;
    font-weight: bold;
    font-family: "Rubik", sans-serif;
    border-radius: 10px;
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
    padding-left: 10rem;
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

export default Nav;
