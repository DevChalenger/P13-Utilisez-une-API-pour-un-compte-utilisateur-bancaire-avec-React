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

function App() {
  return (
    <Router>
      <Header />
      <Navigation>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<SignIn />} />
      </Navigation>
      <Footer />
    </Router>
  );
}

export default App;
