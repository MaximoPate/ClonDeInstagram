import type { Usuario } from "../types/Index";

// Usuario fijo que simula estar logueado desde el inicio
export const usuarioLogueado: Usuario & {
  bio: string;
  seguidores: number;
  seguidos: number;
  cantidadPublicaciones: number;
} = {
  id: 1,
  username: "gato_lover",
  avatar: "https://i.pravatar.cc/150?img=33",
  bio: "Amante de los gatos 🐱 | Buenos Aires",
  seguidores: 342,
  seguidos: 128,
  cantidadPublicaciones: 10,
};