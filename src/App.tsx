import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import type { Publicacion } from "./types/Index";
import { getPublicaciones } from "./services/api";
import Header from "./components/Header/Index";
import Feed from "./components/Feed/Index";
import Profile from "./components/Profile/Index";
import PublicacionModal from "./components/PublicacionModal/Index";
import "./App.css";

const App = () => {
  const [publicaciones, setPublicaciones] = useState<Publicacion[]>([]);
  const [publicacionSeleccionada, setPublicacionSeleccionada] = useState<Publicacion | null>(null);

  useEffect(() => {
    getPublicaciones().then((data) => setPublicaciones(data));
  }, []);

  return (
    <div className="app">
      <Header />

      <Routes>
        <Route path="/"
          element={
            <Feed
              publicaciones={publicaciones}
              setPublicacionSeleccionada={setPublicacionSeleccionada}
            />
          }
        />
        <Route path="/profile" element={<Profile />} />
      </Routes>

      {publicacionSeleccionada && (
        <PublicacionModal
          publicacion={publicacionSeleccionada}
          onClose={() => setPublicacionSeleccionada(null)}
        />
      )}
    </div>
  );
};

export default App;