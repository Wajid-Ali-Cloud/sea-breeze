import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Atmosphere from "./pages/Atmosphere";
import Contact from "./pages/Contact";
import Reserve from "./pages/Reserve";

export default function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/atmosphere" element={<Atmosphere />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/reserve" element={<Reserve />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
