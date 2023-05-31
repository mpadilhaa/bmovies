import React, { useState, useEffect } from "react";
import * as Styled from "./styles";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ImSearch } from "react-icons/im";

const Navbar = () => {
  const [inputValue, setInputValue] = useState("");
  const [showAndHiddenInput, setShowAndHiddenInput] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (!inputValue) return;
    navigate(`/search?q=${inputValue}`);
    setInputValue("");
    setShowAndHiddenInput(false);
  }

  function showInput() {
    setShowAndHiddenInput(!showAndHiddenInput);
  }

  useEffect(() => {
    setShowAndHiddenInput(false);
  }, [navigate]);

  return (
    <Styled.Container>
      <Link to="/" style={Styled.stylesLink}>
        BestMovies
      </Link>

      <form onSubmit={handleSubmit}>
        {showAndHiddenInput && (
          <input
            type="text"
            onChange={handleInputChange}
            value={inputValue}
            placeholder="O que você está procurando?"
          />
        )}
        {!showAndHiddenInput && (
          <button type="text" onClick={showInput}>
            <ImSearch />{" "}
          </button>
        )}
        {showAndHiddenInput && inputValue === "" && (
          <button type="text" onClick={showInput}>
            <ImSearch />{" "}
          </button>
        )}
        {showAndHiddenInput && inputValue && (
          <button type="submit">
            <ImSearch />{" "}
          </button>
        )}
      </form>
    </Styled.Container>
  );
};

export default Navbar;
