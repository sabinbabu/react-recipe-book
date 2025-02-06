import { Button, Form, Stack } from "react-bootstrap";

// eslint-disable-next-line react/prop-types
const Header = ({ searchedTextRef, handleOnSearchBtn }) => {
  return (
    <>
      <Stack direction="horizontal" className="pt-4">
        <h2
          className="me-4 p-4 border rounded-pill"
          style={{
            background: " rgba(255, 255, 255, 0.2)",
            backdropFilter: "blur(6px)",
          }}
        >
          Recipe Book
        </h2>
        <Form.Control
          size="lg"
          type="search"
          placeholder="Search a recipe or ingredient"
          style={{
            width: "60%",
            background: " rgba(255, 255, 255, 0.5)",
            backdropFilter: "blur(5px)",
          }}
          className="ms-4 rounded-pill"
          ref={searchedTextRef}
        />
        <Button
          variant="transparent"
          onClick={() => handleOnSearchBtn(searchedTextRef)}
        >
          <span className="material-icons">search</span>
        </Button>
      </Stack>
    </>
  );
};

export default Header;
