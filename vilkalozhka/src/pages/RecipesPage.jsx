import RecipesFilter from "../components/RecipesFilter/RecipesFilter";
import { Link } from "react-router-dom";
import "../components/RecipesFilter/recipesFilter.scss";
import Container from "../components/Сontainer/Сontainer";
import Card from "../components/Card/Card";
import { useCallback, useEffect, useState } from "react";
import RecipeService from "../services/RecipeService";
import Preloader from "../components/Loader/Loader";
import RecipeCard from "../components/Card/Card";

const LIMIT_PER_PAGE = 8;

const RecipesPage = () => {
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const [hasNextPage, setHasNextPage] = useState(false);

  const onClickHandle = () => {
    console.log(currentPage);
    setCurrentPage((page) => page + 1);
  };

  const fetchRecipeList = async () => {
    setIsLoading(true);

    const [response, data] = await RecipeService.getWithPaginate({
      page: currentPage,
      limit: LIMIT_PER_PAGE,
    });

    if (!data.success) {
      setErrorMessage(data.message);
      setIsLoading(false);

      return;
    }

    if (data.data.has_next_page !== hasNextPage) {
      setHasNextPage(data.data.has_next_page);
    }

    setItems((prevState) => [...prevState, ...data.data.items]);

    setIsLoading(false);
  };

  useEffect(() => {
    fetchRecipeList();
  }, [currentPage]);

  if (!!errorMessage) {
    return (
      <Container>
        <h2>{errorMessage}</h2>
      </Container>
    );
  }

  // if (isLoading || !items.length) {
  //   return (
  //     <Container>
  //     </Container>
  //   );
  // }

  const cards = items.map((item) => (
    <RecipeCard key={item.recipe_id} item={item} />
  ));

  return (
    <Container>
      {/* <div className="recipes__header">
        <Link to="/">
          <h2 className="notActive">Подписки |</h2>
        </Link>
        <Link to="/">
          <h2> Новое</h2>
        </Link>
      </div> */}
      <RecipesFilter />
      <div className="cards">{cards}</div>

      {isLoading && <Preloader />}

      {hasNextPage && (
        <div>
          <button onClick={onClickHandle}>Показать еще</button>
        </div>
      )}
    </Container>
  );
};

export default RecipesPage;
