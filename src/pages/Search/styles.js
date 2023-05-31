import styled, { css } from "styled-components";

export const SearchContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 24px;

    justify-content: center;
    padding-top: 80px;

    @media (min-width: 820px) {
      padding-top: 120px;
    }
  `}
`;

export const SearchMovies = styled.div`
  ${({ theme }) => css`
    margin: 10px auto;
    @media (max-width: 820px) {
      margin: 30px auto;
    }
  `}
`;
