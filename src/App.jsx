import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "material-icons/iconfont/material-icons.css";
import { Container, Row, Col } from "react-bootstrap";
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
    setSavedRecipe((prevValue) => [...prevValue, recipe]);
  };

  // Delete recipe
  const handleOnDeleteBtn = (recipeId) => {
    const updatedRecipe = savedRecipe.filter(
      (recipe) => recipe.idMeal !== recipeId
    );
    setSavedRecipe(updatedRecipe);
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
        <Container fluid>
          <Header setMeals={setMeals} />
          <Row>
            <Col>
              <SearchResult meals={meals} handleOnSaveBtn={handleOnSaveBtn} />
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
