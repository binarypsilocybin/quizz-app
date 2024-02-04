import { extendTheme } from "@chakra-ui/react";

const theme = {
  config: {
    intialColorMode: "dark",
    useSystemColorMode: false,
  },
  styles: {
    global: {
      body: {
        margin: 0,
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen','Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',sans-serif",
        "-WebkitFontSmoothing": "antialiased",
        "-moz-osx-font-smoothing": "grayscale",
      },

      code: {
        fontFamily:
          "source-code-pro, Menlo, Monaco, Consolas, 'Courier New',monospace",
      },
    },
  },
};

export default extendTheme(theme);
