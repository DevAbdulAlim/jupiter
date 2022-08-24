import { Fragment } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Routes from "./routes";

// default theme
import { theme } from "./theme";

export default function App() {
  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <Routes />;
        </CssBaseline>
      </ThemeProvider>
    </Fragment>
  );
}
