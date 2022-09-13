import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes as Navigation,
} from "react-router-dom";

//Components
import Footer from "./components/Footer";
import Header from "./components/Header";

//Pages
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Navigation>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/register" element={<SignUp />}></Route>
          <Route path="*" element={""} />
        </Navigation>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
