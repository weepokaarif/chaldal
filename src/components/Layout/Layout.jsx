import { Box } from "@mui/material";
import React from "react";
import Sidebar from "../Sidebar/Sidebar";

// import { LayoutStyle } from "./LayoutStyle";

const Layout = ({ children }) => {
  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <div>{children}</div>
      </Box>
    </div>
  );
};

export default Layout;
