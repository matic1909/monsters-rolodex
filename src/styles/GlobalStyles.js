import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    background: linear-gradient(
    to left,
    rgba(7, 27, 82, 1) 0%,
    rgba(0, 128, 128, 1) 100%
  );
  }

  h1 {
    font-family: 'Bigelow Rules';
    font-size: 72px;
    color: #0ccac4;
  }
`;
