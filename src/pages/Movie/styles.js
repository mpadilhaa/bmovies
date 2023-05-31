import styled, { css } from "styled-components";

export const MovieContainer = styled.div`
  ${({ theme }) => css`
    position: relative;

    @media (min-width: 820px) {
    }
  `}
`;

export const BackGroundLinear = styled.div`
  ${({ theme }) => css`
    width: 100%;
    position: absolute;
    height: 300px;
    opacity: 1;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.54329481792717091) 60%,
      rgba(0, 0, 0, 1) 100%
    );

    @media (min-width: 820px) {
      width: 50%;
      height: 100vh;
      position: absolute;
      opacity: 1;
      background: radial-gradient(
          circle,
          rgba(0, 0, 0, 0.4) 30%,
          rgba(0, 0, 0, 1) 100%
        ),
        linear-gradient(
          90deg,
          rgba(0, 0, 0, 0.34329481792717091) 60%,
          rgba(0, 0, 0, 1) 100%
        );
    }
  `}
`;

export const MovieContent = styled.div`
  ${({ theme }) => css`
    height: 300px;
    h2 {
      margin: 0;
      font-size: clamp(1rem, 0.6056rem + 1.6828vw, 2.625rem);
    }
    img {
      height: 300px;
      width: 100%;
      object-fit: cover;
    }

    div {
      width: 100%;
      margin: 0 auto;
      margin-top: 50px;
      max-width: 450px;
      display: flex;
      gap: 20px;
      align-items: center;
      flex-direction: column;
    }

    h5 {
      color: ${theme.colors.yellow};
    }

    p {
      padding: 20px;
      max-width: 450px;
      font-size: clamp(0.625rem, 0.534rem + 0.3883vw, 1rem);
    }

    span {
      display: flex;
      gap: 30px;
      color: ${theme.colors.pink};
      font-size: clamp(0.625rem, 0.534rem + 0.3883vw, 1rem);
    }

    small {
      background-color: ${theme.colors.darkLight};
      padding: 2px 10px;
      font-size: clamp(0.625rem, 0.534rem + 0.3883vw, 1rem);
    }

    @media (min-width: 820px) {
      display: flex;
      gap: 150px;

      img {
        height: 100vh;
        width: 50%;
      }

      div {
        width: 50%;
        margin: 240px 0;
        text-align: start;
      }
      p {
        padding: 0;
      }
    }
  `}
`;
