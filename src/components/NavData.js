import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as CgIcons from "react-icons/cg";

export const NavData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Games",
    path: "/games",
    icon: <CgIcons.CgGames />,
    cName: "nav-text",
  },
  {
    title: "Action",
    path: "/games/action",
    icon: <CgIcons.CgGames />,
    cName: "nav-text",
  },
  {
    title: "Shooter",
    path: "/games/shooter",
    icon: <CgIcons.CgGames />,
    cName: "nav-text",
  },
  {
    title: "Puzzle",
    path: "/games/puzzle",
    icon: <CgIcons.CgGames />,
    cName: "nav-text",
  },
];
