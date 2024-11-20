import { useCallback, useEffect, useState } from "react";
import "../Comments/comments.scss";
import CommentService from "../../../services/CommentService";
import Preloader from "../../Loader/Loader";

const Comments = ({ recipe }) => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);

  const [comment, setComment] = useState("");

  const onClickCreateCommentHandle = async (event) => {
    event.preventDefault();

    if (!comment.length) {
      return;
    }

    const [response, data] = await CommentService.createComment({
      recipeId: recipe,
      text: comment.trim(),
    });

    if (!response.ok) {
      return;
    }

    setComment("");
    fetchComments();

    alert("Спасибо за ваш комментарий!");
  };

  const onRemoveCommentHandle = async (commentId) => {
    if (!confirm("Вы точно желаете удалить комментарий?")) {
      return;
    }

    const [response, data] = await CommentService.deleteComment(commentId);

    if (!response.ok) {
      alert(data.message);

      return;
    }

    fetchComments();

    alert("Комментарий удален");
  };

  const fetchComments = useCallback(async () => {
    setIsLoading(true);

    const [_, data] = await CommentService.getCommentsByRecipe(recipe);

    if (!data.success) {
      setIsLoading(false);

      return;
    }

    setItems(data.data.comments);
    setUser(data.data.user);

    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchComments();
  }, []);

  if (isLoading) {
    return (
      <div className="comments" id="comments">
        <div className="comments__inner">
          <Preloader />
        </div>
      </div>
    );
  }

  return (
    <div className="comments" id="comments">
      <h3>Комментарии {`(${items.length})`}</h3>
      <div className="comments__inner">
        {!!user && (
          <div className="createComment">
            <div className="profile">
              <div className="profile__info">
                <div
                  className="image"
                  style={{
                    backgroundImage: !!user.photo_url
                      ? `url('${user.photo_url}')`
                      : "none",
                  }}
                ></div>
                <h4>{user.username}</h4>
              </div>
            </div>
            <form onSubmit={(e) => onClickCreateCommentHandle(e)} method="post">
              <input
                type="text"
                onChange={(e) => setComment(e.currentTarget.value)}
                value={comment}
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
        )}

        <div className="comments__items">
          {items.map((item, index) => {
            return (
              <div className="comments__item" key={index}>
                <div className="profile">
                  <div className="profile__info">
                    <div className="image"></div>
                    <h4> {item.user.username} </h4>
                  </div>
                  <div className="flex wrap">
                    <div className="createdAt">{item.created_at}</div>
                    {item.is_current_user && (
                      <p
                        className="remove-comment"
                        onClick={onRemoveCommentHandle.bind(
                          this,
                          item.comment_id
                        )}
                      >
                        Удалить
                      </p>
                    )}
                  </div>
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
