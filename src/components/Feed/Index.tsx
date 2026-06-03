import { useState, useEffect } from "react";
import axios from "axios";
import type { Publicacion } from "../../types/Index";
import Post from "../Post/Index";
import "./Feed.css";

const Feed = () => {
  const [publicaciones, setPublicaciones] = useState<Publicacion[]>([]);

  useEffect(() => {
    axios.get("https://api.thecatapi.com/v1/images/search", {
      params: { limit: 10, has_breeds: 1 }
    }).then((response) => { //logica pensada por claude
      const data = response.data.map((cat: any, index: number) => ({
        id: cat.id,
        usuario: {
          id: index + 1,
          username: cat.breeds?.[0]?.name ?? `usuario_${index + 1}`,
          avatar: `https://i.pravatar.cc/150?img=${index + 1}`,
        }, 
        imagenes: [cat.url],
        likes: Math.floor(Math.random() * 900) + 100,
        descripcion: cat.breeds?.[0]?.description ?? "🐱",
        comentarios: [],
      }));
      setPublicaciones(data);
    });
  }, []);

  return (
    <div className="feed">
      {publicaciones.map((pub) => (
        <Post key={pub.id} publicacion={pub} />
      ))}
    </div>
  );
};

export default Feed; 