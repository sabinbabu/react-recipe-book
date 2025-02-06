import { Container, Alert } from "react-bootstrap";
import FavoriteCard from "./FavoriteCard";

/* eslint-disable react/prop-types */
const FavoriteRecipe = ({ savedRecipe, handleOnDeleteBtn }) => {
  console.log(savedRecipe);

  return (
    <>
      <h2>Favorite Recipe</h2>

      {savedRecipe?.length ? (
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
      ) : (
        <Alert
          variant="primary"
          style={{
            background: " rgba(255, 255, 255, 0.2)",
            backdropFilter: "blur(6px)",
          }}
        >
          Please add your recipes
        </Alert>
      )}
    </>
  );
};

export default FavoriteRecipe;
