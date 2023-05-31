import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    position: fixed;
    padding: 25px;
    z-index: 10;

    & form {
    }

    & input {
      width: 100%;
      display: block;
      max-width: 450px;
      margin: 20px auto;
      padding: 7px 20px;
    }

    & input:focus {
      outline: none;
    }
    & button {
      text-align: center;
      color: blue;
      background-color: transparent;
      border: none;
      color: ${theme.colors.light};
      position: absolute;
      top: 40px;
      right: 25px;
      display: flex;
      align-items: center;
      cursor: pointer;
    }

    & button svg {
      font-size: 18px;
    }

    @media (min-width: 820px) {
      button svg {
        font-size: 30px;
      }
    }
  `}
`;

export const stylesLink = {
  color: "#FFFFFA",
  textDecoration: "none",
  fontWeight: "700",
  border: "none",
  outline: "none",
  letterSpacing: "",
  fontSize: "clamp(1.25rem, 0.8252rem + 1.8123vw, 3rem)",
};
