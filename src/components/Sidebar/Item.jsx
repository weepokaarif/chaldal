import React, { useState } from "react";
import { hasChildren } from "./utilis";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { useNavigate } from "react-router-dom";

import {
  Collapse,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
//! ===========>End<============

const Item = ({ item }) => {
  return <MenuItem item={item} />;
};

const MenuItem = ({ item }) => {
  const Component = hasChildren(item) ? MultiLevel : SingleLevel;
  return <Component item={item} />;
};

const SingleLevel = ({ item }) => {
  const navigate = useNavigate();
  return (
    <ListItem
      disablePadding
      onClick={() => {
        navigate(`${item.to}`);
      }}
    >
      <ListItemButton>
        <ListItemIcon sx={{ height: "25px" }}>
          {item.img ? <img src={item.img} alt={item.title} /> : item.icon}
        </ListItemIcon>
        <ListItemText primary={item.title} sx={{ fontFamily: "cursive" }} />
      </ListItemButton>
    </ListItem>
  );
};

const MultiLevel = ({ item }) => {
  const { items: children } = item;
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };
  // const navigate = useNavigate();
  // onClick={() => {
  // navigate(`${item.to}`);
  // }}

  return (
    <>
      {" "}
      <List disablePadding>
        <ListItem disablePadding>
          <ListItemButton onClick={handleClick}>
            <ListItemIcon sx={{ height: "25px" }}>
              {item.img ? <img src={item.img} alt={item.title} /> : item.icon}
            </ListItemIcon>
            <ListItemText primary={item.title} sx={{ fontFamily: "cursive" }} />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
        </ListItem>

        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {children.map((child, key) => (
              <MenuItem key={key} item={child} />
            ))}
          </List>
        </Collapse>
      </List>
    </>
  );
};

export default Item;
