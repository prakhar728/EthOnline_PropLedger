import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    primary: "#000000",
    secondary: "#FFFFFF",
    accent: "#00AAFF",
    highlight:"#178FEB",
    headings:"#4169E1"
  },
  fonts: {
    body:`'Raleway', sans-serif`,
    heading: `'Poppins', sans-serif`,
  },
});

export default theme;