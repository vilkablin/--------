import pushpin from "../../../assets/images/others/pushpin.png";
import "../Ingredients/Ingredients.scss";

const Ingredients = ({ ingredients }) => {
  const items = ingredients.map((item, key) => {
    return (
      <li key={key} className="ingredients__item">
        {item}
      </li>
    );
  });

  return (
    <div className="ingredients" id="ingredients">
      <img src={pushpin} alt="pushpin" />
      <h3>Ингредиенты:</h3>
      <ul>{items}</ul>
    </div>
  );
};
export default Ingredients;
