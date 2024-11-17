import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../../services/AuthService";

const Exit = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const performLogout = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        return navigate("/signin");
      }

      try {
        const [response, data] = await AuthService.logout({ token: token });

        console.log(data);

        if (!response.ok) {
          return;
        }

        localStorage.removeItem("token");

        return navigate("/signin");


      } catch (error) {
        console.error("Ошибка при выходе:", error);
        return navigate("/signin");
      }
      finally{
        return navigate("/signin");
      }
    };

    performLogout();
  }, );

};

export default Exit;
