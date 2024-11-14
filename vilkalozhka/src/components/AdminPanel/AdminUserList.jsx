const users = [
  {
    id: "1",
    username: "vilkablin",
    email: "vilkakedadls",
    likes: 10,
    followers: 14,
    recipes: 3,
  },
  {
    id: "2",
    username: "vilkasvfap[lin",
    email: "vilkakedd,;aadls",
    likes: 1328,
    followers: 143228,
    recipes: 391,
  },
  {
    id: "3",
    username: "vilkablin",
    email: "vilkakedadls",
    likes: 10,
    followers: 14,
    recipes: 3,
  },
  {
    id: "4",
    username: "vilkablin",
    email: "vilkakedadls",
    likes: 10,
    followers: 14,
    recipes: 3,
  },
];

const UsersList = () => {
  return (
    <div className="usersList">
      <div className="users__title">
        <div>ID</div>
        <div>Имя пользователя</div>
        <div>Email</div>
        <div>Лайки</div>
        <div>Подписчики</div>
        <div>Рецепты</div>
        <div></div>
      </div>

      {users.map((item, index) => {
        return (
          <div className="userItem" key={index}>
            <div>{item.id}</div>
            <div>{item.username}</div>
            <div>{item.email}</div>
            <div>{item.likes}</div>
            <div>{item.followers}</div>
            <div>{item.recipes}</div>
            <div>
              <button>
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 2.5C21.875 2.5 27.5 8.125 27.5 15C27.5 21.875 21.875 27.5 15 27.5C8.125 27.5 2.5 21.875 2.5 15C2.5 8.125 8.125 2.5 15 2.5ZM15 5C12.625 5 10.5 5.75 8.875 7.125L22.875 21.125C24.125 19.375 25 17.25 25 15C25 9.5 20.5 5 15 5ZM21.125 22.875L7.125 8.875C5.75 10.5 5 12.625 5 15C5 20.5 9.5 25 15 25C17.375 25 19.5 24.25 21.125 22.875Z"
                    fill="#FF7425"
                  />
                </svg>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default UsersList;
