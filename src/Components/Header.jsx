// src/components/Header.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="/foto.png" alt="Foto de perfil" className="profile-pic" />
        <h2>Raiane Macedo</h2>
      </div>
      <nav>
        <Link to="/">Certificações</Link>
        <Link to="/about">Sobre</Link>
        <Link to="/skills">Habilidades</Link>
        <Link to="/projects">Projetos</Link>
        <Link to="/contact">Contato</Link>
      </nav>
    </header>
  );
};

export default Header;
