import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box
}
html {
  &::webkit-scrollbar{
    width: 5rem;
  }
  &::webkit-scrollbar-thumbr{
    background-color: darkgray
  }
  &::-webkit-scrollbar-track {
    background: white;
  }
 
}
body {
  font-family: 'Roboto', sans-serif;
  width: 100%;
  
  
}

h2{
  font-size: 3rem;
  font-family: 'Lato', cursive ;
  font-weight: lighter;
}
h3{
  font-size: 1.3rem;
  color: #333;
  padding: 1.5rem 0rem;
  gap: 2rem;
  
  
}
p{
    font-size: 1.2rem;
    line-height: 200%;
    color: #696969;
  }
  a{
    text-decoration: none;
    color: #333;

  }

`;

export default GlobalStyle;
