import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "material-icons/iconfont/material-icons.css";
import { Container } from "react-bootstrap";
import Header from "./components/Header";

function App() {
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
          <Header />
        </Container>
      </div>
    </>
  );
}

export default App;
