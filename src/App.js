import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Contact from "./components/Pages/Contact";
import Fruits from "./components/Pages/Fruits";
import Layout from "./components/Layout/Layout";
import CssBaseline from "@mui/material/CssBaseline";
import Login from "./components/Auth/Login/Login";
import Signup from "./components/Auth/Signup/Signup";

function App() {
  return (
    <>
      <CssBaseline />
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="home" element={<Home />} />
          <Route exact path="about" element={<About />} />
          <Route exact path="contact" element={<Contact />} />
          <Route exact path="fruit" element={<Fruits />} />
        </Routes>
      </Layout>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
