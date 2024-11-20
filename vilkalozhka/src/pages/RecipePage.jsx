import Information from "../components/oneRecipe/Information/Information";
import Ingredients from "../components/oneRecipe/Ingredients/Ingredients";
import Container from "../components/Сontainer/Сontainer";
import Stages from "../components/oneRecipe/Stages/Stages";
import "../components/oneRecipe/oneRecipe.scss";
import Comments from "../components/oneRecipe/Comments/Comments";
import { useCallback, useEffect, useState } from "react";
import Preloader from "../components/Loader/Loader";
import { useParams } from "react-router-dom";
import RecipeService from "../services/RecipeService";

const RecipePage = () => {
  const { id } = useParams();

  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchRecipe = useCallback(async () => {
    setIsLoading(true);

    const [response, data] = await RecipeService.getRecipeByRecipeId(id);

    if (!data.success) {
      console.log(data.message);

      setIsLoading(false);

      return;
    }

    setItem(data.data);

    setIsLoading(false);
  }, [id]);

  useEffect(() => {
    fetchRecipe();
  }, []);

  if (isLoading || !item) {
    return (
      <Container>
        <Preloader />
      </Container>
    );
  }

  return (
    <>
      <Information item={item} />
      <Container>
        <div className="layout">
          <div className="aside">
            <Ingredients ingredients={item.ingredients} />
            <Comments recipe={id} />
          </div>
          <Stages steps={item.steps} />
        </div>
      </Container>
    </>
  );
};
export default RecipePage;
