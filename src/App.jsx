import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "material-icons/iconfont/material-icons.css";
import { Container, Row, Col } from "react-bootstrap";
import Header from "./components/Header";
import { useState } from "react";
import SearchResult from "./components/SearchResult";

function App() {
  const [meals, setMeals] = useState([]);
  console.log("APImeals", meals);

  return (
    <>
      <div
        style={{
          backgroundImage:
            'url("https://img.freepik.com/free-photo/food-background-with-ingredients-pasta_1220-3108.jpg")',
          height: "100vh",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Container fluid>
          <Header setMeals={setMeals} />
          <Row>
            <Col md={4}>
              <SearchResult meals={meals} />
            </Col>
            <Col md={8}>{/* Favorite recipe */}</Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default App;
