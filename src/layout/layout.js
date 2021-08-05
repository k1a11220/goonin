import React from "react";
import { ThemeProvider } from "styled-components";
import ThemeContext from "@src/store/themeContext";
import useTheme from "@src/hooks/useTheme";
import styledTheme from "@styles/theme";
import GlobalStyle from "@styles/globalStyle";
import Navigation from "@components/common/navigation";
import Footer from "@components/common/footer";

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
