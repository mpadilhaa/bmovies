import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: transparent;
    position: absolute;
    top: 20px;
    right: 20px;
    z-index: 10;

    & form {
      display: flex;
      align-items: center;
    }

    & input {
      padding: 5px 20px;
      border: none;
    }

    & input:focus {
      outline: none;
    }
    & button {
      text-align: center;
      color: blue;
      display: flex;
      background: transparent;
      border: none;
      color: ${theme.colors.light};
    }

    & button svg {
      font-size: 18px;
    }
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    gap: 330px;
  `}
`;

export const stylesLink = {
  color: "#FFFFFA",
  textDecoration: "none",
  fontWeight: "500",
  letterSpacing: "",
  margin: "0 auto",
  fontSize: "18px",
};
