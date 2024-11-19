import ProfileInfo from "../components/Profile/ProfileInfo/ProfileInfo";
import ProfileRecipes from "../components/Profile/ProfileRecipes/ProfileRecipes";

import { TOKEN_STORAGE_KEY } from "../config/config";
import { AuthContext } from "../context/AuthContext";
import UserService from "../services/UserService";
import { useCallback, useContext, useEffect, useState } from "react";
import Container from "../components/Сontainer/Сontainer";
import Preloader from "../components/Loader/Loader";

const ProfilePage = () => {
  const { isAuthenticated } = useContext(AuthContext);

  const [userInformation, setUserInformation] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchUserInformation = useCallback(async () => {
    const token = localStorage.getItem(TOKEN_STORAGE_KEY);

    if (!token) {
      return;
    }

    setIsLoading(true);

    const [_, data] = await UserService.getUserInfo(token);

    setUserInformation(data.data);

    setIsLoading(false);
  }, [isAuthenticated]);

  useEffect(() => {
    fetchUserInformation();
  }, []);

  if (isLoading || !!!userInformation) {
    return (
      <Container>
        <Preloader />
      </Container>
    );
  }

  return (
    <>
      <ProfileInfo user={userInformation} />
      <ProfileRecipes user={userInformation} />
    </>
  );
};

export default ProfilePage;
