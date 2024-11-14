import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Exit = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Удаление токена из localStorage при выходе
    localStorage.removeItem('token');
    
    // Перенаправление на страницу входа
    navigate('/signin');
  }, [navigate]);

  return null; // Компонент ничего не отображает
};

export default Exit;
