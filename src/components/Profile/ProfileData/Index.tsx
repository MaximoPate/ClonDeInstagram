import { usuarioLogueado } from "../../../data/usuarioLogueado";
import "./ProfileData.css";

const ProfileData = () => {
  return (
    <div className="profile-data">
      <img src={usuarioLogueado.avatar} alt={usuarioLogueado.username} className="profile-avatar" />

      <div className="profile-info">
        <h2 className="profile-username">{usuarioLogueado.username}</h2>
        <p className="profile-bio">{usuarioLogueado.bio}</p>

        <div className="profile-stats">
          <span><strong>{usuarioLogueado.cantidadPublicaciones}</strong> publicaciones</span>
          <span><strong>{usuarioLogueado.seguidores}</strong> seguidores</span>
          <span><strong>{usuarioLogueado.seguidos}</strong> seguidos</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileData;