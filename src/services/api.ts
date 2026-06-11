import axios from "axios";
import type { Publicacion } from "../types/Index";
import { comentariosFijos } from "../data/comentariosFijos";

export const getPublicaciones = async (): Promise<Publicacion[]> => {
  const response = await axios.get("https://api.thecatapi.com/v1/images/search", {
    params: { limit: 10, has_breeds: 1 }
  });

  const publicaciones: Publicacion[] = response.data.map((cat: any, index: number) => ({
    id: cat.id,
    usuario: {
      id: index + 1,
      username: cat.breeds?.[0]?.name ?? `usuario_${index + 1}`,
      avatar: `https://i.pravatar.cc/150?img=${index + 1}`,
    },
    imagenes: [cat.url],
    likes: Math.floor(Math.random() * 900) + 100,
    descripcion: cat.breeds?.[0]?.description ?? "🐱",
    comentarios: comentariosFijos,
  }));

  return publicaciones;
};