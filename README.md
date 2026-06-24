# Clon de Instagram con API de Gatos

## Organización del proyecto

* **components/**: contiene todos los componentes reutilizables de la interfaz.
* **data/**: almacena datos simulados utilizados por la aplicación.
* **services/**: contiene la lógica de consumo de APIs externas.
* **types/**: define las interfaces y tipos TypeScript utilizados en toda la aplicación.

Esta organización permite mantener el código modular, escalable y fácil de mantener.

---

## Componentes creados

### Header

Responsable de mostrar la barra lateral de navegación similar a Instagram. (se muestra en todas las paginas)

### CarrouselHistorias

Muestra las historias destacadas en la parte superior del feed.

### Feed

Renderiza el listado de publicaciones obtenidas desde la API.

### Post

Representa una publicación individual dentro del feed.

### Suggestions

Muestra sugerencias de usuarios para seguir.

### Profile

Componente principal de la página de perfil.

### ProfileData

Muestra la información del usuario logueado (avatar, biografía y estadísticas).

### ProfileFeed

Muestra la grilla de publicaciones del perfil.

### PublicacionModal

Permite visualizar una publicación individual en detalle mediante una ventana modal.

---

## Responsabilidad de cada componente

* **Feed** se encarga de recorrer publicaciones.
* **Post** se encarga de mostrar una publicación.
* **ProfileData** muestra los datos del usuario.
* **ProfileFeed** muestra la galería de publicaciones.
* **PublicacionModal** administra la vista detallada de una publicación.

Esta separación facilita el mantenimiento, la reutilización y la escalabilidad del proyecto.

---

## Justificación de la componentización

En lugar de crear una única página con toda la lógica mezclada, se dividió la interfaz en componentes reutilizables e independientes.

Las ventajas son:

* Mayor reutilización de código.
* Menor acoplamiento entre funcionalidades.
* Código más legible.
* Facilita futuras modificaciones.
* Permite trabajar en equipo de forma más organizada.

---

## Comunicación entre componentes mediante Props

### Feed → Post

El componente Feed envía cada publicación al componente Post mediante la prop:

```tsx
publicacion={pub}
```

Además, envía una función:

```tsx
onClick={() => setPublicacionSeleccionada(pub)}
```

que permite informar al componente superior qué publicación fue seleccionada.

### App → Feed

El componente App envía:

* publicaciones
* setPublicacionSeleccionada

para que Feed pueda renderizar la información y comunicar eventos.

### App → PublicacionModal

Cuando existe una publicación seleccionada, App le envía:

```tsx
publicacion={publicacionSeleccionada}
onClose={...}
```

permitiendo mostrar y cerrar la publicación individual.

---

## Hooks utilizados

### useState

Se utilizó para almacenar estados dinámicos.

Ejemplos:

#### publicaciones

```tsx
const [publicaciones, setPublicaciones] = useState([])
```

Guarda las publicaciones obtenidas desde la API.

#### publicacionSeleccionada

```tsx
const [publicacionSeleccionada, setPublicacionSeleccionada] = useState(null)
```

Guarda la publicación que el usuario seleccionó para visualizar individualmente.

#### likeado

Dentro de Post:

```tsx
const [likeado, setLikeado] = useState(false)
```

Permite gestionar los likes de cada publicación.

---

### useEffect

Se utilizó para ejecutar código al cargar la aplicación.

```tsx
useEffect(() => {
  getPublicaciones().then(...)
}, [])
```

Su función es obtener las publicaciones desde la API de gatos únicamente cuando la aplicación inicia.

---

## Diseño de Figma utilizado como referencia

https://www.figma.com/es-es/comunidad/file/1235135369163092252/instagram-web-ui-recreated

---

## Visualización individual de publicaciones

La visualización individual fue resuelta mediante el componente **PublicacionModal**.

Cuando el usuario hace clic sobre una imagen:

1. El componente Post ejecuta la función recibida por props.
2. Feed informa a App cuál fue la publicación seleccionada.
3. App actualiza el estado `publicacionSeleccionada`.
4. Se renderiza el componente PublicacionModal.
5. El modal muestra:

   * Imagen.
   * Usuario.
   * Descripción.
   * Likes.
   * Comentarios.

Al cerrar el modal, el estado vuelve a `null` y el modal desaparece.

---

## Simulación del usuario logueado

Se creó un archivo:

```txt
data/usuarioLogueado.ts
```

que contiene información fija de un usuario.

Este objeto simula el usuario autenticado durante toda la ejecución de la aplicación.

No se implementó autenticación real porque el objetivo del proyecto era centrarse en la construcción de la interfaz y el manejo de componentes.

---

## Datos mostrados en el perfil

* Avatar.
* Nombre de usuario.
* Biografía.
* Cantidad de publicaciones.
* Seguidores.
* Seguidos.
* Galería de publicaciones.

Estos datos permiten recrear el proyecto lo más parecido al figma que elegimos.

---

## Estados utilizados

### publicaciones

Almacena las publicaciones obtenidas desde la API.

```tsx
const [publicaciones, setPublicaciones]
```

---

### publicacionSeleccionada

Permite conocer qué publicación está siendo visualizada en detalle.

```tsx
const [publicacionSeleccionada, setPublicacionSeleccionada]
```

---

### likeado

Permite controlar visualmente si una publicación fue marcada con like.

```tsx
const [likeado, setLikeado]
```
