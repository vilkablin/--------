import RecipesFilter from "../components/RecipesFilter/RecipesFilter";
import { Link } from "react-router-dom";
import '../components/RecipesFilter/recipesFilter.scss';
import Container from "../components/Сontainer/Сontainer";
import Card from "../components/Card/Card";

const SubscribesPage = () => {
  return(
    <Container>    <div className="recipes__header">
    <Link to='/'><h2 >Подписки </h2></Link>
    <Link to='/'><h2 className="notActive">| Новое </h2></Link>
    </div>


    <RecipesFilter/>

    <div className="cards">
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      </div>  
  
    </Container>

  )
}

export default SubscribesPage;