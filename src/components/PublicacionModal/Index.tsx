import type { Publicacion, Comentario } from "../../types/Index";
import "./PublicacionModal.css";
import { comentariosFijos } from "../../data/comentariosFijos";

type Props = {
  publicacion: Publicacion;
  onCerrar: () => void;
};

const PublicacionModal = ({ publicacion, onCerrar }: Props) => {
  return (
    <div className="modal-overlay" onClick={onCerrar}>

      {/* stopPropagation evita que el click dentro del modal lo cierre también */}
      <div className="modal-contenido" onClick={(e) => e.stopPropagation()}>

        <button className="modal-cerrar" onClick={onCerrar}>✕</button>

        <img src={publicacion.imagenes[0]} alt="publicacion" className="modal-imagen" />

        <div className="modal-info">
          <div className="modal-header">
            <img src={publicacion.usuario.avatar} alt={publicacion.usuario.username} className="modal-avatar" />
            <span className="modal-username">{publicacion.usuario.username}</span>
          </div>

          <p className="modal-descripcion">{publicacion.descripcion}</p>
          <span className="modal-likes">❤️ {publicacion.likes} likes</span>

          <div className="modal-comentarios">
            {comentariosFijos.map((c) => (
              <p key={c.id}>
                <strong>{c.usuario.username}</strong> {c.texto}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublicacionModal;