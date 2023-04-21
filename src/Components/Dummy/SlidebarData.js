import React from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { GiFruitBowl, GiOrangeSlice } from "react-icons/gi";
import { AiFillCar } from "react-icons/ai";
import { MdOutlinePlace } from "react-icons/md";
import { SiLamborghini, SiBmw, SiTata } from "react-icons/si";
import { FaAppleAlt } from "react-icons/fa";

export const SlidebarData = [
  {
    title: "Fruits",
    path: "/fruits",
    icon: <GiFruitBowl/>,
    iconOpen: <ArrowDropDownIcon/>,
    iconClose: <ArrowDropUpIcon/>,
    subNav: [
      {
        title: "Mango",
        path: "/fruits/mango",
      },
      {
        title: "Apple",
        path: "/fruits/apple",
        icon: <FaAppleAlt/>,
      },
      {
        title: "Orange",
        path: "/fruits/orange",
        icon: <GiOrangeSlice/>,
      },
    ],
  },
  {
    title: "Cars",
    path: "/cars",
    icon: <AiFillCar/>,
    iconOpen: <ArrowDropDownIcon/>,
    iconClose: <ArrowDropUpIcon/>,
    subNav: [
      {
        title: "Lamborgini",
        path: "/cars/lamborgini",
        icon:<SiLamborghini/>,
      },
      {
        title: "BMW",
        path: "/cars/bmw",
        icon: <SiBmw/>,
      },
      {
        title: "Tata",
        path: "/cars/tata",
        icon: <SiTata/>,
      },
    ],
  },
  {
    title: "Places",
    path: "/places",
    icon: <MdOutlinePlace/>,
    iconOpen: <ArrowDropDownIcon/>,
    iconClose: <ArrowDropUpIcon/>,
    subNav: [
      {
        title: "Mumbai",
        path: "/places/mumbai",
      },
      {
        title: "Pune",
        path: "/places/pune",
      },
      {
        title: "Agra",
        path: "/places/agra",
      },
    ],
  },
];
