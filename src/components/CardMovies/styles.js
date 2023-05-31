import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css``}
`;

export const Image = styled.div`
  ${({ theme }) => css`
    margin-bottom: 20px;

    & img {
      object-fit: cover;

      max-height: 200px;
      min-height: 200px;
      max-width: 240px;
      min-width: 140px;
    }

    @media (min-width: 820px) {
      img {
        max-height: 350px;
      }
    }
  `}
`;
