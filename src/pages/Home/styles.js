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
      top:100px;
      left: 25px;
      z-index: 999;
      font-size: clamp(1.25rem, 0.8252rem + 1.8123vw, 2.6rem);
      max-width: 460px;
    }

    @media (min-width: 820px){
      
      h1{
        top:200px;
      }
  `}
`;

export const BackGroundLinear = styled.div`
  ${({ theme }) => css`
    position: absolute;
    width: 100%;
    height: 100%;

    background: radial-gradient(
        circle,
        rgba(0, 0, 0, 0) 20%,
        rgba(0, 0, 0, 1) 100%
      ),
      linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.14329481792717091) 0%,
        rgba(0, 0, 0, 1) 100%
      );
    z-index: 10;
  `}
`;

export const Categorys = styled.div`
  ${({ theme }) => css`
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    gap: 40px;
  `}
`;
