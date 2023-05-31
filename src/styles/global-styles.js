import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}
body {
  background: ${({ theme }) => theme.colors.dark};
  color:${({ theme }) => theme.colors.light};
  font-family: 'Poppins', sans-serif;
 -webkit-font-smoothing: antialiased;
 }

a{
  font-size: clamp(0.625rem, 0.4733rem + 0.6472vw, 1.25rem)
}

`;
