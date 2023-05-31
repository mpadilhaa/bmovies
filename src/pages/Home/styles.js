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

  
    
    @media (min-width: 820px){
      
      h1{
        font-size: clamp(1.5rem, 0.8252rem + 1.8123vw, 2.6rem);
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

export const TextCarrousel = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: 130px;
    z-index: 999;
    left: 25px;
    max-width: 600px;

    h1 {
      font-size: clamp(1rem, 0.6056rem + 1.6828vw, 2.625rem);
    }

    p {
      margin-bottom: 10px;
      font-size: clamp(0.625rem, 0.534rem + 0.3883vw, 1rem);
      display: none;
    }

    @media (min-width: 820px) {
      top: 200px;

      p {
        display: block;
      }
    }
  `}
`;
