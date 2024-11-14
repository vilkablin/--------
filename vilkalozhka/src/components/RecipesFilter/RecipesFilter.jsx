import "../RecipesFilter/recipesFilter.scss";

import { categories } from "../addRecipe/MainInformationForm";

const RecipesFilter = () => {
  return (
    <>
      <div className="recipesFilter">
        <div className="recipesFilter__inner">
          <h3>Найдите идеальный рецепт</h3>
          <div className="filter__items">
            <div className="input-wrapper">
              <input type="search" placeholder="Название" />
            </div>

            <div className="input-wrapper">
            <input type="search" placeholder="Включает в себя ингредиенты" />
            </div>

            
            <select name="difficulty">
              <option value="value">Выберите сложность блюда</option>
              <option value="easy">Легкий</option>
              <option value="normal">Средний</option>
              <option value="hard">Сложный</option>
            </select>
            <select>
              <option>Время приготовления</option>
              <option>15 минут</option>
              <option>30 минут</option>
              <option>1 час</option>
            </select>
            <select>
              <option>Категории</option>
              {categories.map((item, index) => {
                return <option key={index}>{item.name}</option>;
              })}
            </select>
            <select>
              <option>Упорядочить по</option>
              <option>Популярности</option>
              <option>Новизне</option>
            </select>
          </div>
          <div className="btns">
            <button>Сбросить</button>
            <button className="btn--sort">Сортировать</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecipesFilter;
