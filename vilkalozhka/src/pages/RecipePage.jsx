import Information from "../components/oneRecipe/Information/Information";
import Ingredients from "../components/oneRecipe/Ingredients/Ingredients";
import Container from "../components/Сontainer/Сontainer";
import Stages from "../components/oneRecipe/Stages/Stages";
import "../components/oneRecipe/oneRecipe.scss";
import Comments from "../components/oneRecipe/Comments/Comments";

const RecipePage = () => {
  return (
    <>
      <Information />
      <Container>
        <div className="stagesAndIngredients">
          <Ingredients />
          <Stages />
        </div>
      </Container>
      <Comments />
    </>
  );
};
export default RecipePage;
