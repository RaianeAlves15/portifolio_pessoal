// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Home from "./pages/Certificated"; // Importando a página Certificacoes
import Certificacoes from "./pages/Certificated";

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <div className="content">
          <Routes>
            <Route path="/" element={<Certificacoes />} /> {/* Rota de Certificacoes */}
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
