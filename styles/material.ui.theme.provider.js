import { createTheme, adaptV4Theme } from "@mui/material/styles";

const theme = createTheme(adaptV4Theme({
  palette: {
    primary: {
      main: "#EB2B44",
    },
    secondary: {
      main: "#1380F0",
    },
  },
}));

export default theme;
