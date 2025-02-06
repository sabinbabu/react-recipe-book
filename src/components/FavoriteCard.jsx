/* eslint-disable react/prop-types */
import { Card, Button } from "react-bootstrap";
import { splitToParagraph } from "../utility/splitToParagraph";
import { generateRandomId } from "../utility/generateRandomId";

const FavoriteCard = ({ recipe }) => {
  return (
    <Card
      className="mb-3 text-center "
      style={{
        height: "80vh",
        background: " rgba(255, 255, 255, 0.2)",
        backdropFilter: "blur(6px)",
      }}
    >
      <Card.Header as="h5">{recipe.strMeal}</Card.Header>
      <Card.Body>
        <Card.Img
          variant="top"
          src={recipe.strMealThumb}
          style={{ height: "15rem", width: "25rem" }}
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
        <Button variant="outline-danger">Delete</Button>
      </Card.Body>
    </Card>
  );
};

export default FavoriteCard;
