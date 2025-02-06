import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "material-icons/iconfont/material-icons.css";
import { Container, Row, Col, Alert } from "react-bootstrap";
import Header from "./components/Header";
import { useState } from "react";
import SearchResult from "./components/SearchResult";
import FavoriteRecipe from "./components/FavoriteRecipe";

function App() {
  const [meals, setMeals] = useState([]);
  const [savedRecipe, setSavedRecipe] = useState([]);
  console.log("APImeals", meals);

  // Save recipe
  const handleOnSaveBtn = (recipe) => {
    if (!isRecipeSaved(recipe.idMeal)) {
      setSavedRecipe((prevValue) => [...prevValue, recipe].reverse());
    }
  };

  // Delete recipe
  const handleOnDeleteBtn = (recipeId) => {
    const updatedRecipe = savedRecipe.filter(
      (recipe) => recipe.idMeal !== recipeId
    );
    setSavedRecipe(updatedRecipe);
  };

  // Check if recipe is in saved recipe
  const isRecipeSaved = (recipeID) => {
    return savedRecipe.some((recipe) => recipe.idMeal === recipeID);
  };

  return (
    <>
      <div
        style={{
          backgroundImage:
            'url("https://img.freepik.com/free-photo/food-background-with-ingredients-pasta_1220-3108.jpg")',
          height: "100%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Container fluid style={{ height: "100vh" }}>
          <Header setMeals={setMeals} />
          <Row>
            <Col>
              {meals && meals.length ? (
                <SearchResult
                  meals={meals}
                  handleOnSaveBtn={handleOnSaveBtn}
                  savedRecipe={savedRecipe}
                />
              ) : (
                <Alert
                  variant="info"
                  style={{
                    background: " rgba(255, 255, 255, 0.2)",
                    backdropFilter: "blur(6px)",
                  }}
                >
                  Please search for a recipe
                </Alert>
              )}
            </Col>
            <Col>
              <FavoriteRecipe
                savedRecipe={savedRecipe}
                handleOnDeleteBtn={handleOnDeleteBtn}
              />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default App;
