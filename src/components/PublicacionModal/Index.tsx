import { comentariosFijos } from "../../data/comentariosFijos";
import type { Publicacion } from "../../types/Index";
import { X } from "lucide-react";
import "./PublicacionModal.css";

type Props = {
  publicacion: Publicacion;
  onClose: () => void; 
};

const PublicacionModal = ({ publicacion, onClose }: Props) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-contenido" onClick={(e) => e.stopPropagation()}>

        <button className="modal-cerrar" onClick={onClose}>
          <X size={18} />
        </button>

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