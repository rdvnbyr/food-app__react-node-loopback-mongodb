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
  --primary-color: #903749;
  --primary-color-dark: ${darken(0.125, "#903749")};
  --primary-color-light: ${lighten(0.09, "#903749")};
  --secondary-color: #2b2e4a;
  --secondary-color-dark: ${darken(0.125, "#2b2e4a")};
  --secondary-color-light: ${lighten(0.09, "#2b2e4a")};
  --color-dark: #10092c;
  --color-light: #c6bbf5;
  --color-dark-gray: #444f5a;
  --color-light-gray: #f0f5f9;
  --color-danger: red;

  --btn-color-primary: #903749;
  --btn-color-primary-hover: ${darken(0.125, "#903749")};
  --btn-color-primary-active: ${lighten(0.08, "#903749")};

  --btn-color-secondary: #2b2e4a;
  --btn-color-secondary-hover: ${darken(0.125, "#2b2e4a")};
  --btn-color-secondary-active: ${lighten(0.08, "#2b2e4a")};

  --btn-color-info: #0092ca;
  --btn-color-info-hover: ${darken(0.125, "#0092ca")};
  --btn-color-info-active: ${lighten(0.08, "#0092ca")};

  --btn-color-warning: #ffd460;
  --btn-color-warning-hover: ${darken(0.125, "#ffd460")};
  --btn-color-warning-active: ${lighten(0.08, "#ffd460")};

  --btn-color-danger: #e84545;
  --btn-color-danger-hover: ${darken(0.125, "#e84545")};
  --btn-color-danger-active: ${lighten(0.08, "#e84545")};

  --btn-color-success: #2eb872;
  --btn-color-success-hover: ${darken(0.125, "#2eb872")};
  --btn-color-success-active: ${lighten(0.08, "#2eb872")};
`;
