import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  max-width: 100%;
 
}

#logo{
  font-family:"Rubik"
}

body {
  background: #282828;
  font-family: "Rubik", sans-serif;
  overflow-x: hidden;
}
html{
  font-size: 75%;
    @media (max-width: 1700px){
        font-size: 75%;
    }
    
}




h1 {
  color: #fff;
  font-family: "Permanent Marker";
  font-size: 2.4rem;
}

h2{
  color: #ccc;
    font-weight: lighter;
    font-size: 4rem;
  }
  h3{
    color: #fff;
  }
  h4 {
    font-weight: bold;
    font-size: 2rem; 
    color: blue;
  }
  p{
    padding: 3rem 0rem;
    color: #ccc;
    font-size: 1.4rem;
    line-height: 150%;
  }

  span{
    font-weight: bold;
    color: #23d997
  }
  
  a{
    font-size: 1.1.rem;
  }



  `;

export default GlobalStyle;
