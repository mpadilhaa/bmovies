import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css``}
`;

export const Image = styled.div`
  ${({ theme }) => css`
    margin-bottom: 20px;
    width: 100%;
    & img {
      max-height: 350px;
      min-height: 200px;
      object-fit: cover;
      min-width: 140px;
    }
  `}
`;
