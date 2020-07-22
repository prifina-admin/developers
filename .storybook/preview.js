import React from "react";
import { addDecorator } from "@storybook/react";
/*
import { ThemeProvider } from "styled-components";
import styled from "styled-components";
import theme from "../src/theme/theme";
*/
import ThemeProvider from "../src/theme/ThemeProvider";

const themeTest = {
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    background: {
      default: "#fff",
    },
  },
};

/*
const Base = styled.div`
  font-family: ${theme.fonts.body};
  line-height: ${theme.lineHeights.normal};
  font-weight: ${theme.fontWeights.medium};

  * {
    box-sizing: border-box;
  }
`;

const themeProviderDecorator = story => (
  <ThemeProvider theme={theme}>
    <Base>{story()}</Base>
  </ThemeProvider>
);
*/
const themeProviderDecorator = story => (
  <ThemeProvider>{story()}</ThemeProvider>
);
addDecorator(themeProviderDecorator);
