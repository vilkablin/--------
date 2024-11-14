import pushpin from "../../../assets/images/others/pushpin.png";
import "../Ingredients/Ingredients.scss";
const ingredientsItems = [
  "Паста: 300 г (спагетти, феттучини, пенне - на ваш вкус)",
  "Индейка: 200 г (филе или грудка, нарезанная кубиками)",
  "Сливки: 200 мл (10-20% жирности)",
  "Лук репчатый: 1 шт",
  "Чеснок: 2 зубчика",
  "Сливочное масло: 30 г",
  "Соль: по вкусу",
  "Перец: по вкусу",
  "Оливковое масло: 1 ст. ложка",
];

const Ingredients = () => {
  return (
    <div className="ingredients" id="ingredients">
      <img src={pushpin} alt="pushpin" />
      <h3>Ингредиенты:</h3>
      <ul>
        {ingredientsItems.map((item, index) => {
          return (
            <li key={index} className="ingredients__item">
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Ingredients;
