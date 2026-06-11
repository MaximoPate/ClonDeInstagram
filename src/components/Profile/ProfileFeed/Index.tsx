import { publicacionesPerfil } from "../../../data/publicacionesPerfil";
import "./ProfileFeed.css";

const ProfileFeed = () => {
  return (
    <div className="profile-feed">
      {publicacionesPerfil.map((pub) => (
        <div key={pub.id} className="profile-feed-item">
          <img src={pub.imagen} alt="publicacion" className="profile-feed-imagen" />
        </div>
      ))}
    </div>
  );
};

export default ProfileFeed;