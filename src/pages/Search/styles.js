import styled, { css } from "styled-components";

export const SearchContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 14px;

    padding-top: 120px;

    @media (max-width: 820px) {
      gap: 30px;
    }
  `}
`;

export const SearchMovies = styled.div`
  ${({ theme }) => css`
    max-width: 375px;
    min-width: 140px;
    margin: 0 auto;
  `}
`;
