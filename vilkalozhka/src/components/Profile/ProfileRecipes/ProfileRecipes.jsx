import Container from "../../Сontainer/Сontainer";
import "../ProfileRecipes/profileRecipes.scss";

const ProfileRecipes = ({ user }) => {
  return (
    <Container>
      <div className="profile__recipes">
        <h2>
          Рецепты пользователя <span>{user.username}</span>
        </h2>
        <div className="recipes__items">
          
        </div>
      </div>
    </Container>
  );
};

export default ProfileRecipes;
