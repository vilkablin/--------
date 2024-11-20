import "../addRecipe/addRecipe.scss";

const MainInformationForm = ({ form, onChangeInputHandle, categories }) => {
  const onChangeSelected = () => {
    console.log("implements me");
  };

  const onClickCategoryCheckboxHandle = () => {
    console.log("implements me");
  };

  return (
    <div className="addInformationForm">
      <div className="formHeader">
        <h2>
          Добавление <span>рецепта</span>
        </h2>

        <div className="scrollBar">
          <h3>
            <span>01</span>/03
          </h3>
          <div className="line"></div>
        </div>
      </div>

      <h3>Основная информация</h3>

      <div className="addInformation__inputs">
        <label htmlFor="nameInput">
          Название блюда <span>*</span>
        </label>
        <input
          id="nameInput"
          name="title"
          onChange={(e) => onChangeInputHandle(e)}
          value={form.title}
          type="text"
          placeholder="Паста с индейкой"
        />

        <label htmlFor="descriptionInput">
          Описание блюда <span>*</span>
        </label>
        <input
          id="descriptionInput"
          name="description"
          onChange={(e) => onChangeInputHandle(e)}
          value={form.description}
          type="text"
          placeholder="Лучший ужин для семьи!"
        />

        <div className="inputs">
          <div className="inputs__item">
            <label htmlFor="timeInput">
              Время приготовления <span>*</span>
            </label>
            <input
              id="timeInput"
              name="cooking_time"
              onChange={(e) => onChangeInputHandle(e)}
              value={form.cooking_time}
              type="number"
              placeholder="Укажите время приготовления в минутах"
            />
          </div>

          <div className="inputs__item">
            <label htmlFor="portionsInput">
              Количество порций<span>*</span>
            </label>
            <input
              id="portionsInput"
              name="number_of_servings"
              onChange={(e) => onChangeInputHandle(e)}
              value={form.number_of_servings}
              type="number"
              placeholder="3 порции"
            />
          </div>

          <div className="inputs__item">
            <select name="difficulty" onChange={onChangeSelected}>
              <option value="value">Выберите сложность блюда</option>
              <option value="easy">Легкий</option>
              <option value="normal">Средний</option>
              <option value="hard">Сложный</option>
            </select>
          </div>
        </div>

        <div className="addImage">
          <div className="info">
            <h4>Добавьте фотографию на обложку</h4>
            <p>
              <span> Важно!</span> Чтобы фотография хорошо получилась, делайте
              фото при естественном дневном освещении.
            </p>
            <p>
              Лучше всего подойдет фото квадратного формата, иначе ваша
              фотография обрежется до нужных размеров.
            </p>
            <p>
              Изображение должно быть в формате{" "}
              <span>jpg, png, svg, webp, pdf</span>
            </p>
          </div>

          <div className="image">
            <label htmlFor="imageInput" className="imagedrop">
              <svg
                width="77"
                height="74"
                viewBox="0 0 77 74"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M64.9688 11C66.5159 11 68.0479 11.2942 69.4772 11.8659C70.9066 12.4375 72.2054 13.2754 73.2994 14.3317C74.3933 15.3879 75.2611 16.6419 75.8532 18.022C76.4453 19.4021 76.75 20.8812 76.75 22.375V62.625C76.75 64.1188 76.4453 65.5979 75.8532 66.978C75.2611 68.3581 74.3933 69.6121 73.2994 70.6683C72.2054 71.7246 70.9066 72.5625 69.4772 73.1341C68.0479 73.7058 66.5159 74 64.9688 74H23.2812C21.7341 74 20.2021 73.7058 18.7728 73.1341C17.3434 72.5625 16.0446 71.7246 14.9506 70.6683C13.8567 69.6121 12.9889 68.3581 12.3968 66.978C11.8047 65.5979 11.5 64.1188 11.5 62.625V40.757C13.2183 41.45 15.0416 41.947 16.9375 42.234V62.625C16.9399 63.3553 17.0644 64.0483 17.3109 64.704L38.4192 44.7505C39.8662 43.3828 41.7884 42.5837 43.8119 42.5087C45.8353 42.4336 47.8154 43.088 49.3668 44.3445L49.8308 44.7505L70.9355 64.7075C71.182 64.0542 71.3077 63.36 71.3125 62.625V22.375C71.3125 20.7505 70.6441 19.1926 69.4545 18.044C68.2648 16.8953 66.6512 16.25 64.9688 16.25H43.8495C43.5595 14.4471 43.0459 12.6844 42.3197 11H64.9688ZM42.5264 48.254L42.2219 48.499L21.1715 68.4035C21.8337 68.6298 22.5369 68.7453 23.2812 68.75H64.9688C65.7046 68.75 66.4151 68.6275 67.0712 68.4035L46.0281 48.5025C45.5691 48.0681 44.9654 47.8048 44.3244 47.7593C43.6833 47.7138 43.0463 47.8891 42.5264 48.254ZM55.9135 23.25C58.0786 23.25 60.155 24.0804 61.686 25.5586C63.2169 27.0367 64.077 29.0416 64.077 31.132C64.077 33.2224 63.2169 35.2273 61.686 36.7054C60.155 38.1836 58.0786 39.014 55.9135 39.014C53.7484 39.014 51.672 38.1836 50.141 36.7054C48.6101 35.2273 47.75 33.2224 47.75 31.132C47.75 29.0416 48.6101 27.0367 50.141 25.5586C51.672 24.0804 53.7484 23.25 55.9135 23.25ZM20.5625 0.5C23.1807 0.5 25.7733 0.997916 28.1923 1.96532C30.6112 2.93272 32.8091 4.35067 34.6604 6.13819C36.5118 7.92572 37.9804 10.0478 38.9823 12.3833C39.9843 14.7189 40.5 17.2221 40.5 19.75C40.5 22.2779 39.9843 24.7811 38.9823 27.1167C37.9804 29.4522 36.5118 31.5743 34.6604 33.3618C32.8091 35.1493 30.6112 36.5673 28.1923 37.5347C25.7733 38.5021 23.1807 39 20.5625 39C15.2747 39 10.2036 36.9719 6.46456 33.3618C2.72555 29.7517 0.625 24.8554 0.625 19.75C0.625 14.6446 2.72555 9.74827 6.46456 6.13819C10.2036 2.52812 15.2747 0.5 20.5625 0.5ZM55.9135 28.5C55.5555 28.5 55.201 28.5681 54.8703 28.7003C54.5396 28.8326 54.2391 29.0265 53.9859 29.2709C53.7328 29.5153 53.532 29.8054 53.395 30.1248C53.258 30.4441 53.1875 30.7864 53.1875 31.132C53.1875 31.4776 53.258 31.8199 53.395 32.1392C53.532 32.4586 53.7328 32.7487 53.9859 32.9931C54.2391 33.2375 54.5396 33.4314 54.8703 33.5637C55.201 33.6959 55.5555 33.764 55.9135 33.764C56.6365 33.764 57.3299 33.4867 57.8411 32.9931C58.3523 32.4995 58.6395 31.83 58.6395 31.132C58.6395 30.4339 58.3523 29.7645 57.8411 29.2709C57.3299 28.7773 56.6365 28.5 55.9135 28.5ZM20.5625 7.5L20.2362 7.5245C19.8741 7.58838 19.5407 7.75723 19.2804 8.00857C19.02 8.25991 18.8452 8.58183 18.779 8.9315L18.75 9.25V18H9.68025L9.354 18.028C8.99185 18.0919 8.65843 18.2607 8.39811 18.5121C8.13779 18.7634 7.96291 19.0853 7.89675 19.435L7.86775 19.75L7.89675 20.065C7.96291 20.4147 8.13779 20.7366 8.39811 20.9879C8.65843 21.2393 8.99185 21.4081 9.354 21.472L9.68025 21.5H18.75V30.2605L18.779 30.5755C18.8452 30.9252 19.02 31.2471 19.2804 31.4984C19.5407 31.7498 19.8741 31.9186 20.2362 31.9825L20.5625 32.014L20.8888 31.9825C21.2509 31.9186 21.5843 31.7498 21.8446 31.4984C22.105 31.2471 22.2798 30.9252 22.346 30.5755L22.375 30.2605V21.5H31.4556L31.7819 21.472C32.144 21.4081 32.4774 21.2393 32.7378 20.9879C32.9981 20.7366 33.173 20.4147 33.2391 20.065L33.2681 19.75L33.2391 19.435C33.1727 19.0849 32.9973 18.7626 32.7363 18.5112C32.4753 18.2598 32.1411 18.0912 31.7782 18.028L31.452 18H22.375V9.25L22.346 8.935C22.2805 8.5847 22.1059 8.26201 21.8456 8.00999C21.5852 7.75797 21.2514 7.58861 20.8888 7.5245L20.5625 7.5Z"
                  fill="#707070"
                />
              </svg>
            </label>
            <input
              type="file"
              name="mainImage"
              id="imageInput"
              onChange={(e) => onChangeInputHandle(e)}
            />
            <label htmlFor="imageInput" className="imageButton">
              <svg
                width="33"
                height="34"
                viewBox="0 0 33 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.125 22.5V11.2937L11.55 14.8687L9.625 12.875L16.5 6L23.375 12.875L21.45 14.8687L17.875 11.2937V22.5H15.125ZM8.25 28C7.49375 28 6.84658 27.731 6.3085 27.1929C5.77042 26.6548 5.50092 26.0072 5.5 25.25V21.125H8.25V25.25H24.75V21.125H27.5V25.25C27.5 26.0063 27.231 26.6539 26.6929 27.1929C26.1548 27.7319 25.5072 28.0009 24.75 28H8.25Z"
                  fill="black"
                />
              </svg>
              <p>Выбрать фото</p>
            </label>
          </div>
        </div>
      </div>

      <div className="categories__info">
        <h3>
          <span>Категории</span>
        </h3>
        <p>Выберите категории, которым соответствует ваш рецепт </p>

        <div className="categories">
          {categories.map((item) => {
            return (
              <div className="categories__item" key={item.value}>
                <input
                  onClick={onClickCategoryCheckboxHandle}
                  type="checkbox"
                  name={item.value}
                  id={item.value}
                />
                <p>{item.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MainInformationForm;
