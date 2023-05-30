import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;

    & h4 {
      font-size: 10px;
      font-weight: 400;
    }
  `}
`;

export const Image = styled.div`
  ${({ theme }) => css`
    & img {
      min-height: 200px;
      object-fit: cover;
    }
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    padding-top: 10px;

    & h4 {
      color: ${theme.colors.yellow};
      font-size: ${theme.font.small};
      margin-bottom: 10px;
    }
  `}
`;

export const stylesLink = {
  color: "#FFFFFA",
  textDecoration: "none",
  fontWeight: "500",
  letterSpacing: "",

  fontSize: "16px",
  backgroundColor: "#FF312E",
  padding: "0 10px",
};
