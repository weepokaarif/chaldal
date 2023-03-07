import React from "react";
// import HomeIcon from "@mui/icons-material/Home";
import DescriptionIcon from "@mui/icons-material/Description";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import StarBorder from "@mui/icons-material/StarBorder";
import home from "../../assets/icon/home.png";
import about from "../../assets/icon/about.png";
import contact from "../../assets/icon/team.png";
import food from "../../assets/icon/food.png";
export const menu = [
  {
    img: home,
    title: "Home",
    items: [],
    to: "/",
  },
  {
    img: about,
    title: "About",
    items: [],
    to: "/about",
  },
  {
    img: contact,
    title: "Contact",
    items: [],
    to: "/contact",
  },
  {
    img: food,
    title: "Food",
    items: [
      {
        title: "Technical Analysis",
        items: [
          {
            title: "The Dow Theory",
            to: "/",
          },
          {
            title: "Charts & Chart Patterns",
            to: "/",
          },
          {
            title: "Trend & Trend Lines",
            to: "/",
          },
          {
            title: "Support & Resistance",
            to: "/",
          },
        ],
      },
      {
        title: "Fundamental Analysis",
        items: [
          {
            title: "The Dow Theory",
            to: "/",
          },
          {
            title: "Charts & Chart Patterns",
            to: "/",
          },
          {
            title: "Trend & Trend Lines",
            to: "/",
          },
          {
            title: "Support & Resistance",
            to: "/",
          },
        ],
      },
      {
        title: "Elliot Wave Analysis",
        items: [
          {
            title: "The Dow Theory",
            to: "/",
          },
          {
            title: "Charts & Chart Patterns",
            to: "/",
          },
          {
            title: "Trend & Trend Lines",
            to: "/",
          },
          {
            title: "Support & Resistance",
            to: "/",
          },
        ],
      },
    ],
  },
  {
    icon: <TrendingUpIcon />,
    title: "Options",
    to: "/",
  },
  {
    icon: <DescriptionIcon />,
    title: "Blog",
    to: "/",
  },
];
