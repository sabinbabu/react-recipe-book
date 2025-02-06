/* eslint-disable react/prop-types */
import { Container } from "react-bootstrap";

import RecipeCard from "./RecipeCard";
import { useEffect, useState } from "react";
const SearchResult = ({ meals }) => {
  const totalRecipe = meals.length;
  const [counter, setCounter] = useState(0);

  const [data, setData] = useState({});

  useEffect(() => {
    setData(meals[counter]);
  }, [meals, counter]);

  const handleOnLeftBtn = () => {
    if (counter < 1) {
      setCounter(meals.length - 1);
    } else setCounter(counter - 1);
  };
  const handleOnRightBtn = () => {
    if (counter === meals.length - 1) {
      setCounter(0);
    } else setCounter(counter + 1);
  };

  return (
    <Container>
      <RecipeCard
        data={data}
        recipeCounter={counter + 1}
        totalRecipe={totalRecipe}
        handleOnLeftBtn={handleOnLeftBtn}
        handleOnRightBtn={handleOnRightBtn}
      />
    </Container>
  );
};

export default SearchResult;
