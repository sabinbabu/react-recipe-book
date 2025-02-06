/* eslint-disable react/prop-types */
import {
  Container,
  Card,
  Stack,
  Badge,
  CardLink,
  Button,
} from "react-bootstrap";
import { getQuantityAndIng } from "../utility/getQuantityAndIng";
const SearchResult = ({ meals }) => {
  const data = meals[0];

  return (
    <Container>
      <Card
        style={{
          width: "25rem",
          background: " rgba(255, 255, 255, 0.5)",
          backdropFilter: "blur(5px)",
        }}
      >
        <Card.Header>Featured</Card.Header>
        <Card.Body>
          <Card.Title className="text-center">{data?.strMeal}</Card.Title>
          <Card.Img
            variant="top"
            src={data?.strMealThumb}
            style={{ height: "10rem", backgroundSize: "cover" }}
          />
          <Stack
            direction="horizontal"
            className="d-flex justify-content-between p-2"
          >
            <Badge bg="danger">{data?.strArea}</Badge>
            <Badge bg="success">{data?.strCategory}</Badge>
          </Stack>
          <Card.Title>Ingredients</Card.Title>
          <div className="overflow-scroll" style={{ height: "22rem" }}>
            {getQuantityAndIng(data).map((item) => (
              <li key={item.id} className="p-2">
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
            <CardLink href={data?.strYoutube} target="_blank">
              YouTube
            </CardLink>
            <Button variant="success">Save</Button>
          </Stack>
        </Card.Footer>
      </Card>
    </Container>
  );
};

export default SearchResult;
