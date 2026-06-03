import type { Publicacion } from "../../types/Index";
import "./Post.css";

type Props = {
  publicacion: Publicacion;
}

const Post = ({ publicacion }: Props) => {
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
      />

      <div className="post-footer">
        <span>❤️ {publicacion.likes}</span>
        <p>{publicacion.descripcion}</p>
      </div>

    </div>
  );
};

export default Post;