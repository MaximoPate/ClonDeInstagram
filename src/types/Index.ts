// Le pedimos a claude que nos genere las interfaces para el proyecto, basándose en la descripción que le dimos y en los componentes que creamos.

export type Usuario = {
  id: number;
  username: string;
  avatar: string;
}

export type Historia = {
  id: number;
  usuario: Usuario;
}

export type Publicacion = {
  id: number;
  usuario: Usuario;
  imagenes: string[]; 
  likes: number;
  descripcion: string;
  comentarios: Comentario[];
}

export type Comentario = {
  id: number;
  usuario: Usuario;
  texto: string;
}

export type Sugerencia = {
  id: number;
  usuario: Usuario;
  motivo: string; // "Te sigue", "Seguido por..."
}