// import stage1 from "../../../assets/images/recepies/stage1.png";
// import { Link } from "react-router-dom";
import "../Stages/stages.scss";
import { useState } from "react";

// const stagesItems = [
//   {
//     id: 1,
//     text: `Пасту отварите в подсоленной воде до состояния "аль денте" (примерно 8-10 минут). Откиньте на дуршлаг и сбрызните оливковым маслом, чтобы она не слиплась.`,
//     img: stage1,
//   },
//   {
//     id: 2,
//     text: `Индейку обжарьте на сковороде с оливковым маслом до золотистой корочки. Добавьте соль и перец по вкусу. Переложите мясо на тарелку.`,
//     img: stage1,
//   },
//   {
//     id: 3,
//     text: `Пасту отварите в подсоленной воде до состояния "аль денте" (примерно 8-10 минут). Откиньте на дуршлаг и сбрызните оливковым маслом, чтобы она не слиплась.`,
//     img: stage1,
//   },
// ];

const Stages = ({ steps }) => {
  const items = steps.map((item, index) => {
    return (
      <div className="stages__item" key={index}>
        <h3>Этап {item.position}</h3>
        <p>{item.description}</p>
        <div className={`image`}>
          <img src={item.image_url} alt={`Этап ${item.position}`} />
        </div>
      </div>
    );
  });

  return (
    <div className="stages">
      <h3>Как готовить? А вот так:</h3>

      <div className="stages__inner" id="recipe">
        {items}
      </div>
    </div>
  );
};

export default Stages;
