import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
   
    width: 100%;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    padding: 25px;
    z-index: 10;
    

    & form {
    
   
     
     
      
    }

    & input {
     
     
      width: 100%;
      display: block;
      max-width: 450px;
      margin: 20px auto;
      padding: 7px 20px;
    
    }

    & input:focus {
      outline: none;
    }
    & button {
      text-align: center;
      color: blue;
      background-color: transparent;
      border: none;
      color: ${theme.colors.light};
      position: absolute;
      top: 32px;
      right: 25px;
      display: flex;
      align-items: center;
     
    }

    & button svg {
      font-size: 18px;
    }
  `}
`;


export const stylesLink = {
  color: "#FFFFFA",
  textDecoration: "none",
  fontWeight: "500",
  border:'none',
  outline:'none',
  letterSpacing: "",
  fontSize: "clamp(1.25rem, 0.8252rem + 1.8123vw, 3rem)",
};
