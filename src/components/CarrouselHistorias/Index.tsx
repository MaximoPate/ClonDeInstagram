import { historiasFijas } from "../../data/historiasFijas";
import "./CarrouselHistorias.css";

const CarrouselHistorias = () => {
  return (
    <div className="carrousel-historias">
      {historiasFijas.map((historia) => (
        <div key={historia.id} className="historia-item">
          <div className="historia-anillo">
            <img
              src={historia.usuario.avatar}
              alt={historia.usuario.username}
              className="historia-avatar"
            />
          </div>
          <span className="historia-username">{historia.usuario.username}</span>
        </div>
      ))}
    </div>
  );
};

export default CarrouselHistorias;