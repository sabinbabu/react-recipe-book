import "material-icons/iconfont/material-icons.css";
import axios from "axios";
import { Container, Row, Col, Alert } from "react-bootstrap";
import Header from "./components/Header";
import { useEffect, useRef, useState } from "react";
import SearchResult from "./components/SearchResult";
import FavoriteRecipe from "./components/FavoriteRecipe";

function App() {
  const [meals, setMeals] = useState([]);
  const storedRecipes = JSON.parse(localStorage.getItem("savedRecipe")) || [];
  const [savedRecipe, setSavedRecipe] = useState(storedRecipes);
  const searchedTextRef = useRef(null);
  console.log("APImeals", meals);

  useEffect(() => {
    localStorage.setItem("savedRecipe", JSON.stringify(savedRecipe));
  }, [savedRecipe]);

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

  // Handle when fav recipe is searched
  const handleOnSearchSavedRecipe = (recipeName) => {
    getAPIData(recipeName);
  };

  //   Search for recipe
  const handleOnSearchBtn = () => {
    getAPIData();
  };

  const getAPIData = async (recipeName) => {
    try {
      const query = searchedTextRef.current.value || recipeName;
      const API_URL = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
      const response = await axios.get(API_URL + query);
      setMeals(response.data.meals);
      searchedTextRef.current.value = "";
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container fluid style={{ height: "100vh" }}>
      <Header
        searchedTextRef={searchedTextRef}
        handleOnSearchBtn={handleOnSearchBtn}
      />
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
            handleOnSearchSavedRecipe={handleOnSearchSavedRecipe}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
