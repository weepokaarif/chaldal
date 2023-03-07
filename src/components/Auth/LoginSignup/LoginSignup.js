import React, { useState } from "react";
// import { Paper } from "@mui/material";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Box } from "@mui/system";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";

// * TabPanel making
const TabPanel = (props) => {
  const { children, value, index } = props;
  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && <Box>{children}</Box>}
    </div>
  );
};

const LoginSignup = () => {
  const [value, setValue] = useState(0);
  const handleChange = (e, newValue) => {
    setValue(newValue);
  };
  // * TabPanel style
  const paperStyle = {
    width: 350,
    margin: "20px auto",
    backgroundColor: "#ededed",
  };

  return (
    <>
      <Paper elevation={20} style={paperStyle}>
        <Tabs
          indicatorColor="secondary"
          textColor="secondary"
          value={value}
          onChange={handleChange}
        >
          <Tab label="Login"></Tab>
          <Tab label="Sign up"></Tab>
        </Tabs>
        <TabPanel value={value} index={0}>
          <Login />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Signup />
        </TabPanel>
      </Paper>
    </>
  );
};

export default LoginSignup;
