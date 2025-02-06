import { useRef } from "react";
import { Button, Form, Stack } from "react-bootstrap";
import axios from "axios";

// eslint-disable-next-line react/prop-types
const Header = ({ setMeals }) => {
  const searchedTextRef = useRef(null);
  const API_URL = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

  //   Search for recipe
  const handleOnSearchBtn = async () => {
    try {
      const response = await axios.get(API_URL + searchedTextRef.current.value);
      setMeals(response.data.meals);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Stack direction="horizontal" className="pt-4">
        <h1 className="me-4">Recipe Book</h1>
        <Form.Control
          size="lg"
          type="search"
          placeholder="Search a recipe"
          style={{
            width: "60%",
            background: " rgba(255, 255, 255, 0.5)",
            backdropFilter: "blur(5px)",
          }}
          className="ms-4 rounded-pill"
          ref={searchedTextRef}
        />
        <Button variant="transparent" onClick={handleOnSearchBtn}>
          <span className="material-icons">search</span>
        </Button>
      </Stack>
    </>
  );
};

export default Header;
