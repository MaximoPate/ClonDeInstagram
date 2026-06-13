import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import type { Publicacion } from "./types/Index";
import { getPublicaciones } from "./services/api";
import Header from "./components/Header/Index";
import CarrouselHistorias from "./components/CarrouselHistorias/Index";
import Feed from "./components/Feed/Index";
import Suggestions from "./components/Suggestions/Index";
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

      <main className="main-content">
        <Routes>
          <Route
            path="/"
            element={
              <div className="home">
                <div className="home-feed">
                  <CarrouselHistorias />
                  <Feed
                    publicaciones={publicaciones}
                    setPublicacionSeleccionada={setPublicacionSeleccionada}
                  />
                </div>

                <aside className="home-sidebar">
                  <Suggestions />
                </aside>
              </div>
            }
          />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>

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