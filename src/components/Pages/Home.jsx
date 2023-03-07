import { Box, Typography } from "@mui/material";
import React from "react";
import Hero from "../Hero/Hero";
import ProductCategory from "../ProductCategory/ProductCategory";

const Home = () => {
  return (
    <>
      <Box sx={{ display: "flex", width: "100vw" }}>
        <Hero />
        <Box sx={{ my: 4, py: 1 }}>
          {/* <h2 className="text-2xl font-bold">Home page Home</h2> */}
          {/* <Box sx={{ flexGrow: 1, pr: 2 }}> */}
        </Box>
      </Box>
      {/* //* Products Category */}
      <ProductCategory />
    </>
  );
};

export default Home;
