import React, { useState } from "react";
import * as Styled from "./styles";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (!inputValue) return;
    navigate(`/search?q=${inputValue}`);
    setInputValue("");
  }

  return (
    <Styled.Container>
      <Link to="/">BestMovies</Link>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleInputChange} value={inputValue} />
        <button type="submit">Procurar filme</button>
      </form>
    </Styled.Container>
  );
};

export default Navbar;
