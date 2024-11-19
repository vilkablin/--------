import React, { useContext, useEffect, useState } from "react";
import Container from "../../Сontainer/Сontainer";
import "../Signin.scss";
import { Link, useNavigate } from "react-router-dom";
import AuthService from "../../../services/AuthService";
import { AuthContext } from "../../../context/AuthContext";

const Signup = () => {
  const { isAuthenticated, login } = useContext(AuthContext);

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_r, setPassword_r] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (!isAuthenticated) {
      return;
    }

    navigate("/profile");
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== password_r) {
      setError("Пароли отличаются");

      return;
    }

    try {
      const [response, data] = await AuthService.signup({
        username: username,
        password: password,
        password_confirmation: password_r,
        email: email,
      });

      if (!response.ok) {
        return setError(data.message);
      }

      login(data.data.token);

      navigate("/profile");
    } catch (error) {
      setError("Ошибка при регистрации");
    }
  };

  return (
    <Container>
      <div className="signin">
        <div className="signin__form">
          <h2>Регистрация</h2>
          {error && <p className="error">{error}</p>}
          <form onSubmit={handleSubmit} method="POST">
            <label htmlFor="username">
              Введите имя пользователя (Должно быть уникальным) <span>*</span>{" "}
            </label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Введите имя пользователя"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label htmlFor="email">
              Введите ваш email <span>*</span>{" "}
            </label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Введите ваш email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="password">
              Введите пароль <span>*</span>{" "}
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Введите пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="password_r">
              Повторите пароль <span>*</span>{" "}
            </label>
            <input
              type="password"
              id="password_r"
              name="password_R"
              placeholder="Повторите пароль"
              value={password_r}
              onChange={(e) => setPassword_r(e.target.value)}
            />
            <button type="submit">Зарегистрироваться</button>
          </form>
          <p>
            Уже есть аккаунт? <Link to="/signin">Войти</Link>
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Signup;
