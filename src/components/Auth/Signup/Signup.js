import React, { useState } from "react";
import {
  Alert,
  Avatar,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
// import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const paperStyle = {
    padding: "20px 20px",
    margin: "0 auto",
    width: 350,
    height: "74vh",
  };
  // *Form validation
  const navigate = useNavigate();
  const [error, setError] = useState({
    status: false,
    msg: "",
    type: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      name: data.get("name"),
      email: data.get("email"),
      password: data.get("password"),
      confirm_Password: data.get("confirm_Password"),
      tc: data.get("tc"),
    };
    if (
      actualData.name &&
      actualData.email &&
      actualData.password &&
      actualData.confirm_Password &&
      actualData.tc !== null
    ) {
      setError({
        status: true,
        msg: "Account Create Successfully.",
        type: "success",
      });
      console.log(actualData);
      document.getElementById("signup_form").reset();
      setTimeout(() => {
        navigate("/home");
      }, 3000);
    } else {
      setError({
        status: true,
        msg: "All Fields are Required !",
        type: "error",
      });
    }
  };

  return (
    <>
      <Grid
        component="form"
        id="signup_form"
        noValidate
        onSubmit={handleSubmit}
      >
        <Paper style={paperStyle}>
          <Grid align="center">
            <Avatar sx={{ backgroundColor: "purple" }}>
              <PersonAddIcon />
            </Avatar>
            <Typography variant="h5" color="secondary">
              Signup{" "}
            </Typography>
            <Typography variant="caption">
              Please fill this form to create an account !
            </Typography>
          </Grid>
          <form style={{ marginTop: "15px" }}>
            <TextField
              variant="standard"
              type="text"
              name="name"
              label="Name"
              placeholder="Enter your name"
              fullWidth
              required
              color="secondary"
            >
              {" "}
            </TextField>

            <TextField
              variant="standard"
              type="text"
              name="email"
              label="Email"
              placeholder="Enter your email"
              fullWidth
              required
              color="secondary"
            ></TextField>

            <TextField
              variant="standard"
              type=""
              name="phn"
              label="Phone number"
              placeholder="Phone number"
              fullWidth
              required
              color="secondary"
            ></TextField>

            <TextField
              variant="standard"
              type="password"
              name="password"
              label="Password"
              placeholder="Enter your password"
              fullWidth
              required
              color="secondary"
            ></TextField>

            <TextField
              variant="standard"
              type="password"
              name="confirm_Password"
              label="Confirm password"
              placeholder="Confirm password"
              fullWidth
              required
              color="secondary"
            ></TextField>

            <FormControlLabel
              sx={{ marginTop: "8px" }}
              control={
                <Checkbox
                  value="agree"
                  name="tc"
                  id="tc"
                  color="secondary"
                  size="small"
                />
              }
              label="I accept the terms and condition."
            />

            <Button
              type="submit"
              onClick={(e) => console.log("clicked")}
              variant="contained"
              color="secondary"
              fullWidth
              style={{ margin: "8px 0" }}
            >
              Sign up
            </Button>
            {error.status ? (
              <Alert severity={error.type}>{error.msg}</Alert>
            ) : (
              ""
            )}
          </form>
        </Paper>
      </Grid>
    </>
  );
};

export default Signup;
