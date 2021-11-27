import React from "react";
import { ThemeProvider } from "styled-components";
import ThemeContext from "@src/store/themeContext";
import useTheme from "@src/hooks/useTheme";
import styledTheme from "@styles/theme";
import GlobalStyle from "@styles/globalStyle";
import Navigation from "@components/common/navigation";
import Footer from "@components/common/footer";
import TabNavigation from "../components/common/TabNavigation/TabNavigation";
import { ApolloProvider } from "@apollo/client";
import client from "../apollo";

const Layout = ({ path, children }) => {
  const [theme, themeToggler] = useTheme();

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={styledTheme}>
        <ThemeContext.Provider value={theme}>
          <GlobalStyle />
          <Navigation themeToggler={themeToggler} />
          {children}
          {/* <Footer /> */}
          <TabNavigation path={path} />
        </ThemeContext.Provider>
      </ThemeProvider>
    </ApolloProvider>
  );
};
export default Layout;
