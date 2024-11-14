import stage1 from "../../../assets/images/recepies/stage1.png";
import { Link } from "react-router-dom";
import '../Stages/stages.scss';
import { useState } from "react";

const stagesItems = [
  {
    id: 1,
    text: `Пасту отварите в подсоленной воде до состояния "аль денте" (примерно 8-10 минут). Откиньте на дуршлаг и сбрызните оливковым маслом, чтобы она не слиплась.`,
    img: stage1,
  },
  {
    id: 2,
    text: `Индейку обжарьте на сковороде с оливковым маслом до золотистой корочки. Добавьте соль и перец по вкусу. Переложите мясо на тарелку.`,
    img: stage1,
  },
  {
    id: 3,
    text: `Пасту отварите в подсоленной воде до состояния "аль денте" (примерно 8-10 минут). Откиньте на дуршлаг и сбрызните оливковым маслом, чтобы она не слиплась.`,
    img: stage1,
  },
];

const Stages = () => {

  return (
    <div className="stages">
      <div className="navbar">
        <a href="#ingredients">Ингредиенты</a>
        <a href="#recipe">Рецепт</a>
        <a href="#comments">Комментарии</a>
      </div>

      <div className="stages__inner" id="recipe">
        {stagesItems.map((item, index) => {
          const [isOpen, setIsOpen] = useState(false);
          return <div className="stages__item" key={index}>
            <h3>Этап {item.id}</h3>
            <p>{item.text}</p>
           <div className={`${isOpen ? 'active' : ''} image`} onClick={()=>setIsOpen(!isOpen)} >
            <img src={item.img} alt="Этап" />
           </div>
          </div>;
        })}
      </div>
    </div>
  );
};

export default Stages;
