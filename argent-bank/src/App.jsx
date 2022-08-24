import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes as Navigation,
} from "react-router-dom";

//Components
import Footer from "./components/Footer";
import Header from "./components/Header";
import Dashboard from "./pages/Profile";

//Pages
import Home from "./pages/Home";
import SignIn from "./pages/Profile";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Navigation>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/user" element={<Dashboard />} />
        </Navigation>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
