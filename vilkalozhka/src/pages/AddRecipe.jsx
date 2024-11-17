import React, { useCallback, useEffect, useState } from "react";

import MainInformationForm from "../components/addRecipe/MainInformationForm";
import Container from "../components/Сontainer/Сontainer";
import "../components/addRecipe/addRecipe.scss";
import IngredientsForm from "../components/addRecipe/IngredientsForm";
import StagesForm from "../components/addRecipe/StagesForm";

const initialFormState = {
  name: "",
  description: "",
  time: "",
  portions: "",
  difficulty: "",
  receipt: "",
};

const AddRecipe = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const [form, setForm] = useState(initialFormState);

  const onChangeInputHandle = (e) => {
    setForm((prevState) => {
      // console.log(e.target.value);

      prevState = { ...prevState };

      console.log(e);

      prevState[e.target.name] = e.target.value.trim();

      return prevState;
    });
  };

  const components = [
    <MainInformationForm
      form={form}
      onChangeInputHandle={onChangeInputHandle}
    />,
    <IngredientsForm form={form} onChangeInputHandle={onChangeInputHandle} />,
    <StagesForm form={form} onChangeInputHandle={onChangeInputHandle} />,
  ];

  const setNextPage = useCallback(() => {
    setCurrentPage((prevState) => {
      if (prevState >= components.length - 1) {
        return prevState;
      }

      return prevState + 1;
    });
  }, []);

  const setPrevPage = useCallback(() => {
    setCurrentPage((prevState) => {
      if (prevState <= 0) {
        return prevState;
      }

      return prevState - 1;
    });
  }, []);

  useEffect(() => {
    console.log(currentPage);
  }, [currentPage]);

  useEffect(() => {
    console.log(form);
  }, [form]);

  return (
    <Container>
            {components[currentPage]}
            <div className="addForm__btns">
        <button
          onClick={setPrevPage}
          className={`${currentPage == 0 ? "notActive" : ""}  btn--prev`}
        >
          Вернуться
        </button>
        <button onClick={setNextPage} className={`${currentPage == 2 ? "notActive" : ""}  btn--next`}>
          Следующий этап{" "}
    
    
        </button>
        <button className={`${currentPage !== 2 ? "notActive" : ""}  btn--send btn--next`}>
          Выложить рецепт
          
        </button>
      </div>
    </Container>
  );
};

export default AddRecipe;