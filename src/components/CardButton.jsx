/* eslint-disable react/prop-types */
import { Button } from "react-bootstrap";

const CardButton = ({ data, handleOnSaveBtn }) => {
  return (
    <Button variant="success" onClick={() => handleOnSaveBtn(data)}>
      Save
    </Button>
  );
};

export default CardButton;
