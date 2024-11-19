import Container from "../../Сontainer/Сontainer";
import "../Comments/comments.scss";

const commentsItems = [
  {
    id: 1,
    author: " Вилка блин ",
    createdAt: "19.09.2024  15:26",
    text: "Теперь мой любимый рецепт! Еще люблю добавить туда помидорки черри. Fавишоыашвлщмсычсмитьдщшгнеаквыфячсмитлщшгнеавыф авпргошгнекувыывлмолмтморироит ьрг рммпгш огаморатм атмавотмлмт алтм лвм ивлаыом окушм гмщфврифгн тШМтфлон ",
  },
  {
    id: 2,
    author: " Вилка блин ",
    createdAt: "19.09.2024  14:12",
    text: "Теперь мой любимый рецепт! Еще люблю добавить туда помидорки черри. ",
  },
];

const Comments = () => {
  return (
    <div className="comments" id="comments">
      <h3>Комментарии {`(${commentsItems.length})`}</h3>
      <div className="comments__inner">
        <div className="createComment">
          <div className="profile">
            <div className="profile__info">
              <div className="image"></div>
              <h4>Вилка блин</h4>
            </div>
          </div>
          <form action="" method="post">
            <input
              type="text"
              placeholder="Оставьте комментарий..."
              name="comment"
            />
            <button>
              <svg
                width="31"
                height="29"
                viewBox="0 0 31 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.45843 14.5L5.67826 7.93029C5.4548 6.05012 7.52405 4.669 9.35176 5.47979L24.7794 12.3165C26.7492 13.189 26.7492 15.811 24.7794 16.6835L9.35176 23.5214C7.52405 24.331 5.4548 22.9511 5.67826 21.0709L6.45843 14.5ZM6.45843 14.5H15.5001"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </form>
        </div>
        <div className="comments__items">
          {commentsItems.map((item, index) => {
            return (
              <div className="comments__item" key={index}>
                <div className="profile">
                  <div className="profile__info">
                    <div className="image"></div>
                    <h4> {item.author} </h4>
                  </div>
                  <div className="createdAt">{item.createdAt}</div>
                </div>
                <p>{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Comments;
