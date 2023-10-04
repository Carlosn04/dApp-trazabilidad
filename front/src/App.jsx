import { useState } from 'react'
import './App.css'
import { createRoot } from "react-dom/client";
import Navbar from './components/NavBar/NavBar';
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Etiqueta from './pages/Etiqueta';
import Organizacion from './pages/Organizacion';
import Track from './pages/Track';

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/organization", label: "Organizacion" },
  { path: "/label", label: "Etiqueta" },
  { path: "/track", label: "Track" }
];

function App() {
  return (
    <div className="app-container"> {/* This is the new container */}
      <div className="mobile-window"> {/* This is your mobile app window */}
        <Navbar navLinks={navLinks} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/organization" element={<Organizacion />} />
          <Route path="/label" element={<Etiqueta />} />
          <Route path="/track" element={<Track />} />
        </Routes>
      </div>
    </div>
  );
}

export default App
