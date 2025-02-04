import "../Information/info.scss";
import recipeImage from "../../../assets/images/recepies/image.png";
import Container from "../../Сontainer/Сontainer";
import { Link } from "react-router-dom";

const Information = ({ item }) => {
  return (
    <Container>
      <div className="bread-crumbs">
        <Link to="/">Главная /</Link>
        <Link to="/recipes">Рецепты /</Link>
        <Link to="#" className="active">
          {item.title}
        </Link>
      </div>

      <div className="recipeInformation">
        <div className="image">
          <img src={item.photo_url} alt="recipe image" />
          <div className="bottom__info">
            <Link to={`/users/${item.user.user_id}`}>
              Автор: {item.user.username}
            </Link>

            <div className="statistics">
              <form action="/">
                <input type="hidden" name="recepie_id" />
                <button type="submit">
                  <svg
                    width="35"
                    height="32"
                    viewBox="0 0 35 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M25.0431 0.5C22.0123 0.5 19.3224 1.72912 17.5 3.84172C15.6776 1.72912 12.9877 0.5 9.9569 0.5C7.31714 0.503281 4.78642 1.58211 2.91984 3.49985C1.05325 5.41759 0.0031939 8.01766 0 10.7298C0 21.9422 15.9627 30.901 16.6416 31.2776C16.9054 31.4236 17.2004 31.5 17.5 31.5C17.7996 31.5 18.0946 31.4236 18.3584 31.2776C19.0373 30.901 35 21.9422 35 10.7298C34.9968 8.01766 33.9468 5.41759 32.0802 3.49985C30.2136 1.58211 27.6829 0.503281 25.0431 0.5ZM24.2149 22.5653C22.1138 24.3971 19.8677 26.0457 17.5 27.4942C15.1323 26.0457 12.8862 24.3971 10.7851 22.5653C7.51595 19.6839 3.62069 15.2897 3.62069 10.7298C3.62069 9.00324 4.28825 7.34743 5.47652 6.1266C6.66479 4.90577 8.27643 4.21991 9.9569 4.21991C12.6422 4.21991 14.8901 5.67688 15.8239 8.02352C15.9598 8.36561 16.1919 8.65835 16.4904 8.86442C16.7889 9.07049 17.1404 9.18054 17.5 9.18054C17.8596 9.18054 18.2111 9.07049 18.5096 8.86442C18.8081 8.65835 19.0402 8.36561 19.1761 8.02352C20.1099 5.67688 22.3578 4.21991 25.0431 4.21991C26.7236 4.21991 28.3352 4.90577 29.5235 6.1266C30.7117 7.34743 31.3793 9.00324 31.3793 10.7298C31.3793 15.2897 27.4841 19.6839 24.2149 22.5653Z"
                      fill="black"
                    />
                  </svg>
                  <span>{item.statistics.likes}</span>
                </button>
              </form>
              <div className="comment">
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 31.125C20.5959 31.125 23.1335 30.3552 25.2919 28.913C27.4503 27.4709 29.1325 25.421 30.1259 23.0227C31.1193 20.6244 31.3792 17.9854 30.8728 15.4394C30.3664 12.8934 29.1163 10.5548 27.2808 8.71923C25.4452 6.88366 23.1066 5.63363 20.5606 5.1272C18.0146 4.62077 15.3756 4.88069 12.9773 5.87409C10.579 6.86749 8.52916 8.54975 7.08696 10.7081C5.64477 12.8665 4.875 15.4041 4.875 18C4.875 20.17 5.4 22.2146 6.33333 24.0185L4.875 31.125L11.9815 29.6667C13.784 30.5985 15.8315 31.125 18 31.125Z"
                    stroke="black"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>{item.statistics.comments}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="recipeInformation__inner">
          <h2>{item.title}</h2>
          <div className="inner__properties">
            <div>Время приготовления: {item.cooking_time} минут</div>
            <div>Сложность: {item.complexity}</div>
            <div>Количество порций: {item.number_of_servings}</div>
          </div>
          <p className="description">{item.description}</p>
          <div className="createdDate">{item.created_at}</div>
        </div>
      </div>
    </Container>
  );
};

export default Information;
