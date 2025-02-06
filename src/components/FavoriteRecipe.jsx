import { Container } from "react-bootstrap";
import FavoriteCard from "./FavoriteCard";

/* eslint-disable react/prop-types */
const FavoriteRecipe = ({ savedRecipe, handleOnDeleteBtn }) => {
  console.log(savedRecipe);

  return (
    <>
      <h2>Favorite Recipe</h2>
      <Container
        className="overflow-auto"
        style={{
          height: "80vh",
        }}
      >
        {savedRecipe.map((recipe) => (
          <FavoriteCard
            key={recipe.idMeal}
            recipe={recipe}
            handleOnDeleteBtn={handleOnDeleteBtn}
          />
        ))}
      </Container>
    </>
  );
};

export default FavoriteRecipe;
