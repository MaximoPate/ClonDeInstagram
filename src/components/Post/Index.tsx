import { useState } from "react";
import type { Publicacion } from "../../types/Index";
import "./Post.css";
import { Heart } from "lucide-react";


type Props = {
  publicacion: Publicacion;
  // Función que avisa al padre (Feed) qué publicación fue clickeada
  onSeleccionar: (pub: Publicacion) => void;
};

const Post = ({ publicacion, onSeleccionar }: Props) => {
  // Controla si el usuario dio like o no
  const [likeado, setLikeado] = useState(false);

  // Si está likeado sumamos 1 al número de la API, si no dejamos el original
  const cantidadLikes = likeado ? publicacion.likes + 1 : publicacion.likes;

  const handleLike = (e: React.MouseEvent) => {
    // Evitamos que el click en el corazón abra el modal
    e.stopPropagation();
    // Alternamos entre likeado y no likeado
    setLikeado(!likeado);
  };

  return (
    // Click en el post abre el modal, excepto en el corazón
    <div className="post" onClick={() => onSeleccionar(publicacion)}>
      <div className="post-header">
        <img src={publicacion.usuario.avatar} alt={publicacion.usuario.username} className="post-avatar" />
        <span className="post-username">{publicacion.usuario.username}</span>
      </div>

      <img src={publicacion.imagenes[0]} alt="publicacion" className="post-imagen" />

      <div className="post-footer">
        {/* El corazón cambia según el estado likeado */}
        <span onClick={handleLike} className={`like-btn ${likeado ? "likeado" : ""}`}>
          <Heart
            size={20}
            fill={likeado ? "red" : "none"}
            color={likeado ? "red" : "currentColor"}
          />
          {cantidadLikes}
        </span>
        <p>{publicacion.descripcion}</p>
      </div>
    </div>
  );
};

export default Post;