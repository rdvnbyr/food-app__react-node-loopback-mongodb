import { createContext } from "react";
import styled from "styled-components";
import { darken, lighten } from "polished";

const StyleContext = createContext();

export function StyleProvider({ children }) {
  const value = {};
  return (
    <StyleContext.Provider value={value}>
      <StyleWrapper>{children}</StyleWrapper>
    </StyleContext.Provider>
  );
}

const StyleWrapper = styled.div`
  --primary-color: #5d2fdf;
  --primary-color-dark: ${darken(0.125, "#5d2fdf")};
  --primary-color-light: ${lighten(0.09, "#5d2fdf")};
  --color-dark: #10092c;
  --color-light: #c6bbf5;
  --color-dark-gray: #838383;
  --color-light-gray: #f9f9f9;
  --color-danger: red;
`;
