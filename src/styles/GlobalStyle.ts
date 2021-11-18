import { darken } from 'polished';
import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html,
  body,
  body > div {
    line-height: 1.6;
    font-size: 18px;
    background: ${({ theme }) => theme.background};
    padding: 3px;
    color: ${({ theme }) => theme.foreground};
    width: 100%;
    height: 100vh;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Rubik', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
      Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }
  input,
  button,
  textarea {
    outline: 0;
  }
  a {
    text-decoration: none;
  }
  ::-webkit-scrollbar {
    width: 4px;
    height: 4px;
  }
  ::-moz-selection {
    background: ${({ theme }) => theme.comment};
  }
  ::selection {
    background: ${({ theme }) => theme.comment};
  }
  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.comment};
  }
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => darken(0.1, theme.cyan)};
    border-radius: 5px;
    transition: 0.2s background;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => darken(0.3, theme.cyan)};
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
