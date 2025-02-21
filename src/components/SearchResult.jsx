/* eslint-disable react/prop-types */
import { Container } from "react-bootstrap";

import RecipeCard from "./RecipeCard";
import { useEffect, useState } from "react";
const SearchResult = ({ meals, handleOnSaveBtn, savedRecipe }) => {
  const [counter, setCounter] = useState(0);

  const totalRecipe = meals.length;
  const data = meals[counter];

  useEffect(() => {
    setCounter(0);
  }, [meals]);

  const handleOnLeftBtn = () => {
    counter < 1 ? setCounter(meals.length - 1) : setCounter(counter - 1);
  };
  const handleOnRightBtn = () => {
    counter === meals.length - 1 ? setCounter(0) : setCounter(counter + 1);
  };

  return (
    <>
      <h2 className="text-start">Recipe</h2>
      <Container className="d-flex flex-column align-items-center">
        <RecipeCard
          data={data}
          recipeCounter={counter + 1}
          totalRecipe={totalRecipe}
          handleOnLeftBtn={handleOnLeftBtn}
          handleOnRightBtn={handleOnRightBtn}
          handleOnSaveBtn={handleOnSaveBtn}
          savedRecipe={savedRecipe}
        />
      </Container>
    </>
  );
};

export default SearchResult;
