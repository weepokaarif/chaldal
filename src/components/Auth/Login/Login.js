import React, { useState } from "react";
import {
  Avatar,
  Button,
  FormControlLabel,
  Grid,
  TextField,
  Checkbox,
  Typography,
  Link,
  Alert,
} from "@mui/material";
// import LockIcon from '@mui/icons-material/Lock';
import PersonIcon from "@mui/icons-material/Person";
import { NavLink, useNavigate } from "react-router-dom";
import { Paper } from "@material-ui/core";

const Login = () => {
  const navigate = useNavigate();
  const paperStyle = {
    padding: 20,
    width: 350,
    height: "74vh",
    margin: "0 auto",
  };

  const [error, setError] = useState({
    status: false,
    msg: "",
    type: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      email: data.get("email"),
      password: data.get("password"),
    };
    if (actualData.email && actualData.password) {
      setError({ status: true, msg: "Login Successfully.", type: "success" });
      console.log(actualData);
      document.getElementById("login_form").reset();
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
    <Grid
      component="form"
      noValidate
      id="login_form"
      onSubmit={handleSubmit}
      sx={{ mt: 10 }}
    >
      <Paper style={paperStyle}>
        <Grid align="center" sx={{ marginBottom: "15px" }}>
          <Avatar sx={{ backgroundColor: "purple" }}>
            <PersonIcon />
          </Avatar>
          <Typography variant="h5" color="secondary">
            Login{" "}
          </Typography>
        </Grid>
        <TextField
          variant="standard"
          color="secondary"
          label="UserEmail"
          type="text"
          placeholder="Enter your Email"
          name="email"
          fullWidth
          required
        ></TextField>
        <TextField
          variant="standard"
          color="secondary"
          label="Password"
          type="password"
          placeholder="Enter your password"
          name="password"
          fullWidth
          required
        ></TextField>
        <FormControlLabel
          sx={{ marginTop: "8px" }}
          control={<Checkbox name="checkedB" color="secondary" size="small" />}
          label="Remember me"
        />
        <Button
          type="submit"
          color="secondary"
          variant="contained"
          fullWidth
          style={{ margin: "8px 0" }}
        >
          Login
        </Button>
        <Typography>
          <Link href="#">Forgot password ?</Link>
        </Typography>
        <Typography>
          Do you have an account ?<NavLink to="/signup"> Sign up </NavLink>
          {error.status ? <Alert severity={error.type}>{error.msg}</Alert> : ""}
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Login;
