import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.sizes.small};
  `}
`;

export const Slider = styled.div`
  ${({ theme }) => css`
    position: relative;
    margin: 0;
    width: 100%;

    h1 {
      position: absolute;
      top: 230px;
      left: 100px;
      z-index: 999;
    }
  `}
`;

export const BackGroundLinear = styled.div`
  ${({ theme }) => css`
    position: absolute;
    width: 100%;
    height: 100%;

    background: linear-gradient(
        90deg,
        rgba(0, 0, 0, 1) 0%,
        rgba(0, 0, 0, 0.20772058823529416) 100%
      ),
      linear-gradient(
        360deg,
        rgba(0, 0, 0, 1) 0%,
        rgba(0, 0, 0, 0.20772058823529416) 100%
      );
    z-index: 10;
  `}
`;

export const Categorys = styled.div`
  ${({ theme }) => css``}
`;
