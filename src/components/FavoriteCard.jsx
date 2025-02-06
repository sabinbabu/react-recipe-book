/* eslint-disable react/prop-types */
import { Card, Button } from "react-bootstrap";
import { splitToParagraph } from "../utility/splitToParagraph";
import { generateRandomId } from "../utility/generateRandomId";

const FavoriteCard = ({
  recipe,
  handleOnDeleteBtn,
  handleOnSearchSavedRecipe,
}) => {
  return (
    <Card
      className="mb-3 text-center "
      style={{
        height: "80vh",
        background: " rgba(255, 255, 255, 0.2)",
        backdropFilter: "blur(3px)",
      }}
    >
      <Card.Header className="d-flex align-items-center">
        <Button
          variant="transparent"
          onClick={() => handleOnSearchSavedRecipe(recipe.strMeal)}
        >
          <span className="material-icons">arrow_circle_left</span>
        </Button>
        <Card.Title as="h5">{recipe.strMeal}</Card.Title>
      </Card.Header>
      <Card.Body>
        <Card.Img
          variant="top"
          src={recipe.strMealThumb}
          style={{ height: "12rem", width: "25rem" }}
        />
        <div className="overflow-scroll mt-4" style={{ height: "20rem" }}>
          {splitToParagraph(recipe.strInstructions).map((item) => (
            <Card.Text
              className="text-start"
              style={{ lineHeight: "2rem" }}
              key={generateRandomId()}
            >
              {item}
            </Card.Text>
          ))}
        </div>
        <Button
          variant="outline-danger"
          onClick={() => handleOnDeleteBtn(recipe.idMeal)}
        >
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};

export default FavoriteCard;
