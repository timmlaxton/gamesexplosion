import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { NavData } from "./NavData";
import styled from "styled-components";
import explosion from "../img/explosion.png";
import { fetchSearch } from "../actions/gamesActions";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import "./Navbar.css";

const Nav = () => {
  const dispatch = useDispatch();

  const [sidebar, setSidebar] = useState(false);
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

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <div className="navbar">
        <Link to="#" className="menu-bars">
          <FaIcons.FaBars onClick={showSidebar} />
        </Link>
        <div onClick={clearSearch} className="logo">
          <img src={explosion} alt="logo" />
        </div>
        <form className="searchbar">
          <input value={textInput} onChange={inputHandler} type="text" />
          <button className="button" onClick={submitSearch} type="submit">
            Search
          </button>
        </form>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars">
              <AiIcons.AiOutlineClose />
            </Link>
          </li>
          {NavData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}

                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

const NavBar = styled(motion.div)``;

export default Nav;
