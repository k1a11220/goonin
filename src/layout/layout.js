import React from "react";
import { ThemeProvider } from "styled-components";
import ThemeContext from "../store/themeContext";
import useTheme from "../hooks/useTheme";
import styledTheme from "../styles/theme";
import GlobalStyle from "../styles/globalStyle";
import Navigation from "../components/navigation";
import Footer from "../components/footer";

const Layout = ({ children }) => {
  const [theme, themeToggler] = useTheme();

  return (
    <ThemeProvider theme={styledTheme}>
      <ThemeContext.Provider value={theme}>
        <GlobalStyle />
        <Navigation />
        {children}
        <Footer />
      </ThemeContext.Provider>
    </ThemeProvider>
  );
};
export default Layout;
