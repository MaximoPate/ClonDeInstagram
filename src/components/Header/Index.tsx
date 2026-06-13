import { Link, useLocation } from "react-router-dom";
import {
  House,
  Search,
  Compass,
  Clapperboard,
  MessageCircle,
  Heart,
  SquarePlus,
  Menu,
} from "lucide-react";
import { usuarioLogueado } from "../../data/usuarioLogueado";
import "./Header.css";

const Header = () => {
  const { pathname } = useLocation();

  return (
    <header className="header">
      <Link to="/" className="header-logo">
        Instagram
      </Link>

      <nav className="header-nav">
        <Link
          to="/"
          className={`header-nav-item ${pathname === "/" ? "active" : ""}`}
        >
          <House size={24} />
          <span>Inicio</span>
        </Link>

        <button className="header-nav-item">
          <Search size={24} />
          <span>Búsqueda</span>
        </button>

        <button className="header-nav-item">
          <Compass size={24} />
          <span>Explorar</span>
        </button>

        <button className="header-nav-item">
          <Clapperboard size={24} />
          <span>Reels</span>
        </button>

        <button className="header-nav-item">
          <MessageCircle size={24} />
          <span>Mensajes</span>
        </button>

        <button className="header-nav-item">
          <Heart size={24} />
          <span>Notificaciones</span>
        </button>

        <button className="header-nav-item">
          <SquarePlus size={24} />
          <span>Crear</span>
        </button>

        <Link
          to="/profile"
          className={`header-nav-item ${
            pathname === "/profile" ? "active" : ""
          }`}
        >
          <img src={usuarioLogueado.avatar} alt={usuarioLogueado.username} />
          <span>Perfil</span>
        </Link>
      </nav>

      <button className="header-nav-item header-more">
        <Menu size={24} />
        <span>Más</span>
      </button>
    </header>
  );
};

export default Header;
