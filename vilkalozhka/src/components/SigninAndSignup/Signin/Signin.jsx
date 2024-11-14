import React, { useState } from "react";
import Container from "../../Сontainer/Сontainer";
import "../Signin.scss";
import { Link, useNavigate } from "react-router-dom";

const Signin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "http://localhost:8888/vilkalozhka-api/actions/user/signin.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            password,
          }),
        }
      );

      const data = await response.json();

      if (response.status === 401) {
        setError("Неверные учетные данные");
        return;
      }

      if (!response.ok) {
        setError(data.message);
        return;
      }

      const token = data.data.token;
      localStorage.setItem('token' ,token);
      navigate('/profile');

    } catch (error) {
      setError("Ошибка при подключении к серверу");
    }
  };

  return (
    <Container>
      <div className="signin">
        <div className="signin__form">
          <h2>Вход</h2>
          {error && <p className="error">{error}</p>}
          <form onSubmit={handleSubmit} method="POST">
            <label htmlFor="username">Введите имя пользователя</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Введите имя пользователя"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label htmlFor="password">Введите пароль</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Введите пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Войти</button>
          </form>
          <p>
            Еще нет аккаунта? <Link to="/signup">Зарегистрироваться</Link>
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Signin;
