import { useState } from "react";

const IngredientsForm = ({ updateIngredients }) => {
  const [ingredient, setIngredient] = useState("");
  const [ingredientsList, setIngredientsList] = useState([]);

  const handleAddIngredient = () => {
    if (ingredient.trim() !== "") {
      const updatedList = [...ingredientsList, ingredient];
      setIngredientsList(updatedList);
      setIngredient("");

      updateIngredients(updatedList);
    }
  };

  return (
    <div className="addInformationForm">
      <div className="formHeader">
        <h2>
          Редактирование <span>рецепта</span>
        </h2>

        <div className="scrollBar">
          <h3>
            <span>02</span>/03
          </h3>
          <div className="line secondPage"></div>
        </div>
      </div>

      <div className="addIngredients__info">
        <h3>
          Добавьте <span>ингредиенты</span>
        </h3>
        <p>
          В поле вводите по одному ингредиенту, с количеством, в той форме,{" "}
          <br />в какой вы хотите чтобы отображалось на сайте.
        </p>
        <p>
          Пример: <span>Чеснок: 2 зубчика (чищеный)</span>{" "}
        </p>
      </div>

      <div className="addInformation__inputs">
        {ingredients.map((ingredient, index) => (
          <div key={index} className="ingredient__field">
            <label>Ингредиент {index + 1} *</label>
            <input
              type="text"
              placeholder="Ингредиент..."
              value={ingredient}
              onChange={(e) => handleIngredientChange(index, e.target.value)}
            />
          </div>
        ))}

        <button onClick={handleAddIngredient}>
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.0002 15.1644H15.1668V20.9977C15.1668 21.3071 15.0439 21.6039 14.8251 21.8227C14.6063 22.0415 14.3096 22.1644 14.0002 22.1644C13.6907 22.1644 13.394 22.0415 13.1752 21.8227C12.9564 21.6039 12.8335 21.3071 12.8335 20.9977V15.1644H7.00016C6.69074 15.1644 6.394 15.0415 6.17521 14.8227C5.95641 14.6039 5.8335 14.3071 5.8335 13.9977C5.8335 13.6883 5.95641 13.3916 6.17521 13.1728C6.394 12.954 6.69074 12.8311 7.00016 12.8311H12.8335V6.99772C12.8335 6.6883 12.9564 6.39156 13.1752 6.17276C13.394 5.95397 13.6907 5.83105 14.0002 5.83105C14.3096 5.83105 14.6063 5.95397 14.8251 6.17276C15.0439 6.39156 15.1668 6.6883 15.1668 6.99772V12.8311H21.0002C21.3096 12.8311 21.6063 12.954 21.8251 13.1728C22.0439 13.3916 22.1668 13.6883 22.1668 13.9977C22.1668 14.3071 22.0439 14.6039 21.8251 14.8227C21.6063 15.0415 21.3096 15.1644 21.0002 15.1644Z"
              fill="black"
            />
          </svg>
          Добавить ингредиент
        </button>
      </div>
    </div>
  );
};

export default IngredientsForm;
