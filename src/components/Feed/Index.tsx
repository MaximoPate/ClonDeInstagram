import type { Publicacion } from "../../types/Index";
import Post from "../Post/Index";
import "./Feed.css";

type Props = {
  publicaciones: Publicacion[];
  // Función para avisar a la página (Home/App) qué post fue clickeado
  setPublicacionSeleccionada: (pub: Publicacion) => void;
};

const Feed = ({ publicaciones, setPublicacionSeleccionada }: Props) => {
  return (
    <div className="feed">
      {publicaciones.map((pub) => (
        <Post
          key={pub.id}
          publicacion={pub}
          // Le pasamos la función al Post para que la llame al clickear la imagen
          onClick={() => setPublicacionSeleccionada(pub)}
        />
      ))}
    </div>
  );
};

export default Feed;