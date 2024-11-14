
import Container from "../components/Сontainer/Сontainer"
import '../components/AdminPanel/AdminPanel.scss'
import UsersList from "../components/AdminPanel/AdminUserList";
import profileImg from "../assets/images/others/profile.png";
import RecipesList from "../components/AdminPanel/RecipesList";
import { useState } from "react";

const AdminPanelPage = () => {

  const [activeComponent, setActiveComponent] = useState('users');

  const renderComponent = () => {
    switch (activeComponent) {
      case 'users':
        return <UsersList />;
      case 'recipes':
        return <RecipesList />;
      default:
        return <Users />;
    }
  };
  return(
    <Container>
      <div className="adminPanel">
      <div className="asideMenu">
        <div className="adminInfo">
          <div className="profile">
            <div className="imgWrapper">
              <img src={profileImg} alt="profile image" />
            </div>
            <p>Виолетта</p>
          </div>
          <p>Администратор</p>
          <p>testt@gmail.com</p>
        </div>
        <div className="btns">
          <button onClick={() => setActiveComponent('users')} className={'users' ? "active" : ""}>Пользователи</button>
          <button onClick={() => setActiveComponent('recipes')} className={'users' ? "" : "active"}>Рецепты</button>
          <button className="">
            <svg
              width="29"
              height="28"
              viewBox="0 0 29 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.4997 2.91663C14.9638 2.91663 15.4089 3.101 15.7371 3.42919C16.0653 3.75738 16.2497 4.2025 16.2497 4.66663C16.2497 5.13075 16.0653 5.57587 15.7371 5.90406C15.4089 6.23225 14.9638 6.41663 14.4997 6.41663H8.66634C8.51163 6.41663 8.36326 6.47808 8.25386 6.58748C8.14447 6.69688 8.08301 6.84525 8.08301 6.99996V21C8.08301 21.1547 8.14447 21.303 8.25386 21.4124C8.36326 21.5218 8.51163 21.5833 8.66634 21.5833H13.9163C14.3805 21.5833 14.8256 21.7677 15.1538 22.0959C15.482 22.424 15.6663 22.8692 15.6663 23.3333C15.6663 23.7974 15.482 24.2425 15.1538 24.5707C14.8256 24.8989 14.3805 25.0833 13.9163 25.0833H8.66634C7.58337 25.0833 6.54476 24.6531 5.77899 23.8873C5.01322 23.1215 4.58301 22.0829 4.58301 21V6.99996C4.58301 5.91699 5.01322 4.87838 5.77899 4.11261C6.54476 3.34683 7.58337 2.91663 8.66634 2.91663H14.4997ZM21.5697 9.46163L24.8702 12.7633C25.1979 13.0914 25.382 13.5362 25.382 14C25.382 14.4637 25.1979 14.9085 24.8702 15.2366L21.5708 18.5383C21.2425 18.8666 20.7973 19.051 20.333 19.051C19.8687 19.051 19.4235 18.8666 19.0952 18.5383C18.7669 18.21 18.5824 17.7647 18.5824 17.3005C18.5824 16.8362 18.7669 16.3909 19.0952 16.0626L19.4078 15.75H14.4997C14.0355 15.75 13.5904 15.5656 13.2622 15.2374C12.934 14.9092 12.7497 14.4641 12.7497 14C12.7497 13.5358 12.934 13.0907 13.2622 12.7625C13.5904 12.4343 14.0355 12.25 14.4997 12.25H19.4078L19.0952 11.9373C18.9327 11.7747 18.8038 11.5818 18.7159 11.3694C18.628 11.1571 18.5828 10.9295 18.5829 10.6996C18.5829 10.4698 18.6282 10.2422 18.7162 10.0299C18.8042 9.81759 18.9332 9.62469 19.0958 9.46221C19.2583 9.29973 19.4513 9.17086 19.6636 9.08296C19.876 8.99506 20.1036 8.94984 20.3334 8.94989C20.5633 8.94995 20.7908 8.99527 21.0031 9.08327C21.2155 9.17128 21.4084 9.30024 21.5708 9.46279L21.5697 9.46163Z"
                fill="white"
              />
            </svg>
            Выйти
          </button>
        </div>
      </div>
       {renderComponent()}
      </div>
    </Container>
  )
}

const AdminAsideMenu = () => {
  
  return (
    <>
      
    </>
  );
};


export default AdminPanelPage;