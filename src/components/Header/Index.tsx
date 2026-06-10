import { Link } from "react-router-dom";
import { usuarioLogueado } from "../../data/usuarioLogueado";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="header-logo">Instagram</Link>

      <nav className="header-nav">
        <Link to="/">🏠 Inicio</Link>

        <Link to="/profile" className="header-perfil">
          <img src={usuarioLogueado.avatar} alt={usuarioLogueado.username} />
          <span>{usuarioLogueado.username}</span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;