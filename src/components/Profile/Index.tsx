import ProfileData from "./ProfileData/Index";
import ProfileFeed from "./ProfileFeed/Index";
import "./Profile.css";

const Profile = () => {
  return (
    // Contenedor principal de la página de perfil
    <div className="profile">
      {/* Sección superior con avatar, bio y estadísticas */}
      <ProfileData />

      {/* Grilla de publicaciones del perfil */}
      <ProfileFeed />
    </div>
  );
};

export default Profile;