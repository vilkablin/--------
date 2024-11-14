import Container from "../components/Сontainer/Сontainer";
import profileImage from "../assets/images/others/profile.png";
import '../components/Profile/editProfile.scss';

const EditProfilePage = () => {
  return (
    <Container>
      <div className="editProfile">
        <div className="editImageAndPassword">
          <div className="editImage">
            <div className="imgWrapper">
            <img src={profileImage} alt="profile image" />
            </div>
  
            <label htmlFor="imageInput">
              <svg
                width="33"
                height="34"
                viewBox="0 0 33 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.125 22.5V11.2937L11.55 14.8687L9.625 12.875L16.5 6L23.375 12.875L21.45 14.8687L17.875 11.2937V22.5H15.125ZM8.25 28C7.49375 28 6.84658 27.731 6.3085 27.1929C5.77042 26.6548 5.50092 26.0072 5.5 25.25V21.125H8.25V25.25H24.75V21.125H27.5V25.25C27.5 26.0063 27.231 26.6539 26.6929 27.1929C26.1548 27.7319 25.5072 28.0009 24.75 28H8.25Z"
                  fill="black"
                />
              </svg>
              Выбрать фото
            </label>
            <input type="file" id="imageInput"></input>
          </div>
          <button className="editPassword">Изменить пароль</button>
        </div>
        <div className="editInfo">
          <form action="/" method="post">
          <label htmlFor="nameInput">
          Имя пользователя  <span>*</span>
        </label>
        <input
          id="nameInput"
          name="name"
          type="text"
          placeholder="Имя пользователя"
        />
          <label htmlFor="emailInput">
          Email  <span>*</span>
        </label>
        <input
          id="emailInput"
          name="email"
          type="text"
          placeholder="Email пользователя"
        />
          <label htmlFor="descInput">
          О себе 
        </label>
        <input
          id="descInput"
          name="desc"
          type="text"
          placeholder="О себе"
        />

        <button>Сохранить</button>
          </form>
        </div>
      </div>
    </Container>
  );
};
export default EditProfilePage;
