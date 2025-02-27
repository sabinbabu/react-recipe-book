/* eslint-disable react/prop-types */
import { Card, Button, Stack, Badge, CardLink } from "react-bootstrap";
import { getQuantityAndIng } from "../utility/getQuantityAndIng.js";

const RecipeCard = ({
  data,
  handleOnLeftBtn,
  handleOnRightBtn,
  recipeCounter,
  totalRecipe,
  handleOnSaveBtn,
  savedRecipe,
}) => {
  const isSaveBtnActive = () =>
    savedRecipe.some((favRecipe) => favRecipe.idMeal === data?.idMeal);
  return (
    <Card
      className="overflow-hidden"
      style={{
        width: "70%",
        background: " rgba(255, 255, 255, 0.2)",
        backdropFilter: "blur(6px)",
      }}
    >
      <Card.Header className="d-flex justify-content-between">
        <Stack direction="horizontal">
          <Badge bg="primary">{recipeCounter}</Badge>
          <div className="vr mx-2"></div>
          <Badge bg="primary">{totalRecipe}</Badge>
        </Stack>
        <Stack direction="horizontal">
          <Button variant="transparent" onClick={handleOnLeftBtn}>
            <span className="material-icons">keyboard_arrow_left</span>
          </Button>
          <Button variant="transparent" onClick={handleOnRightBtn}>
            <span className="material-icons">keyboard_arrow_right</span>
          </Button>
        </Stack>
      </Card.Header>
      <Card.Body className="text-center">
        <Card.Title>{data?.strMeal}</Card.Title>
        <Card.Img
          variant="top"
          src={data?.strMealThumb}
          style={{ height: "12rem", width: "20rem", backgroundSize: "cover" }}
        />
        <Stack
          direction="horizontal"
          className="d-flex justify-content-between p-2"
        >
          <Badge bg="danger">{data?.strArea}</Badge>
          <Badge bg="success">{data?.strCategory}</Badge>
        </Stack>
        <Card.Title>Ingredients</Card.Title>
        <div className="overflow-scroll" style={{ height: "15rem" }}>
          {getQuantityAndIng(data).map((item) => (
            <li key={item.id} className="p-2 text-start">
              {item.ingredient.charAt(0).toUpperCase() +
                item.ingredient.slice(1)}
            </li>
          ))}
        </div>
      </Card.Body>
      <Card.Footer className="text-muted">
        <Stack
          direction="horizontal"
          className="d-flex justify-content-between"
        >
          <Button
            variant="success"
            onClick={() => handleOnSaveBtn(data)}
            disabled={isSaveBtnActive()}
          >
            Save
          </Button>

          {data?.strYoutube && (
            <CardLink href={data?.strYoutube} target="_blank">
              YouTube
            </CardLink>
          )}
        </Stack>
      </Card.Footer>
    </Card>
  );
};

export default RecipeCard;
