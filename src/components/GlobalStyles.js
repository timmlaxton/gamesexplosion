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
  
  font-weight: lighter;
}
h3{
  font-size: 1.1rem;
  color: #333;
  padding: 2rem 0rem;
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

  input{
    font-family: 'Lato', cursive ;
  }

`;

export default GlobalStyle;
