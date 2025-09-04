import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Blogs from "./pages/Blogs";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <Navbar />

      <main className="pt-16"> {/* padding so content is not hidden behind fixed navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}

export default App;
