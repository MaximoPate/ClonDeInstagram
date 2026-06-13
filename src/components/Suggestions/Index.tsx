import { sugerenciasFijas } from "../../data/sugerenciasFijas";
import { usuarioLogueado } from "../../data/usuarioLogueado";
import "./Suggestions.css";

const Suggestions = () => {
  return (
    <div className="suggestions">
      {/* Perfil del usuario logueado en la parte superior */}
      <div className="suggestions-user">
        <img src={usuarioLogueado.avatar} alt={usuarioLogueado.username} className="suggestions-user-avatar" />
        <div className="suggestions-user-info">
          <span className="suggestions-username">{usuarioLogueado.username}</span>
          <span className="suggestions-bio">{usuarioLogueado.bio}</span>
        </div>
        <button className="suggestions-switch">Switch</button>
      </div>

      {/* Encabezado de sugerencias */}
      <div className="suggestions-header">
        <span className="suggestions-title">Suggestions for you</span>
        <button className="suggestions-see-all">See All</button>
      </div>

      {/* Lista de sugerencias */}
      {sugerenciasFijas.map((sug) => (
        <div key={sug.id} className="suggestion-item">
          <img src={sug.usuario.avatar} alt={sug.usuario.username} className="suggestion-avatar" />
          <div className="suggestion-info">
            <span className="suggestion-username">{sug.usuario.username}</span>
            <span className="suggestion-motivo">{sug.motivo}</span>
          </div>
          <button className="suggestion-follow">Follow</button>
        </div>
      ))}
    </div>
  );
};

export default Suggestions;