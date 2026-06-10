import type { Comentario } from "../types/Index";

// Comentarios hardcodeados que se reutilizan en todas las publicaciones con chat
export const comentariosFijos: Comentario[] = [
  {
    id: 1,
    usuario: { id: 2, username: "maria_92", avatar: "https://i.pravatar.cc/150?img=5" },
    texto: "Qué hermoso!! 😍",
  },
  {
    id: 2,
    usuario: { id: 3, username: "carlos_dev", avatar: "https://i.pravatar.cc/150?img=8" },
    texto: "Me encanta esta foto",
  },
  {
    id: 3,
    usuario: { id: 4, username: "juanita.ok", avatar: "https://i.pravatar.cc/150?img=12" },
    texto: "Hermoso gatito 🐱",
  },
];