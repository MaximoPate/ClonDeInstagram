import { useState } from "react";
import type { Publicacion } from "../../types/Index";
import { Heart } from "lucide-react";
import "./Post.css";

type Props = {
  publicacion: Publicacion;
  onClick: () => void;
};

const Post = ({ publicacion, onClick }: Props) => {
  const [likeado, setLikeado] = useState(false);

  const handleLike = () => {
    setLikeado(!likeado);
  };

  return (
    <div className="post">
      <div className="post-header">
        <img src={publicacion.usuario.avatar} alt={publicacion.usuario.username} className="post-avatar" />
        <span className="post-username">{publicacion.usuario.username}</span>
      </div>

      <img
        src={publicacion.imagenes[0]}
        alt="publicacion"
        className="post-imagen"
        onClick={onClick}
      />

      <div className="post-footer">
        <button onClick={handleLike} className="like-btn">
          <Heart
            size={20}
            fill={likeado ? "#ed4956" : "none"}
            color={likeado ? "#ed4956" : "currentColor"}
          />
        </button>
        <p>{publicacion.likes + (likeado ? 1 : 0)} likes</p>
        <p>{publicacion.descripcion}</p>
      </div>
    </div>
  );
};

export default Post;