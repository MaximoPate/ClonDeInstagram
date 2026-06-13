import { Settings } from "lucide-react";
import { usuarioLogueado } from "../../../data/usuarioLogueado";
import "./ProfileData.css";

const ProfileData = () => {
  return (
    <div className="profile-data">
      <img
        src={usuarioLogueado.avatar}
        alt={usuarioLogueado.username}
        className="profile-avatar"
      />

      <div className="profile-info">
        <div className="profile-top">
          <h2 className="profile-username">{usuarioLogueado.username}</h2>
          <button className="profile-btn">Edit profile</button>
          <button className="profile-btn">Ad tools</button>
          <button className="profile-config">
            <Settings size={24} />
          </button>
        </div>

        <div className="profile-stats">
          <span>
            <strong>{usuarioLogueado.cantidadPublicaciones}</strong> publicaciones
          </span>
          <span>
            <strong>{usuarioLogueado.seguidores}</strong> seguidores
          </span>
          <span>
            <strong>{usuarioLogueado.seguidos}</strong> seguidos
          </span>
        </div>

        <p className="profile-bio">{usuarioLogueado.bio}</p>
      </div>
    </div>
  );
};

export default ProfileData;
