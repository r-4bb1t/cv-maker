import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset};
  body {
    /* font-family: 'Nanum Gothic', sans-serif; */
    font-family: 'NanumSquare', sans-serif;
    font-size: 10px;
    font-weight: 400;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -ms-user-select: none;
    -moz-user-select: -moz-none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    user-select:none;
  }
`;

export default GlobalStyle;
