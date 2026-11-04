import { useEffect } from "react";

//redux
import { useDispatch, useSelector } from "react-redux";
import { fetchCountries } from "./redux/countriesReducer";

//components
import Nav from "./components/nav";
import Filters from "./components/filters";

//pages
import Home from "./pages/home";
import CountryDetails from "./pages/countryDetails";

//router
import { Routes, Route } from "react-router-dom";

//styled components
import styled, { ThemeProvider } from "styled-components";
import GlobalStyles, { lightTheme, darkTheme } from "./components/globalStyles";

function App() {
  const theme = useSelector(state => state.theme.theme);
  const dispatch = useDispatch();

  //loading the data when the page refreshes
  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme === "light"? lightTheme: darkTheme}>
      <GlobalStyles/>
      <StyledApp className={theme === "light"? "" : "dark-mode"}>
        <Nav />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Filters />
                <Home />
              </>
            }
          />
          <Route path="/country/:id" element={<CountryDetails />} />
        </Routes>
      </StyledApp>
    </ThemeProvider>
  );
}
const StyledApp = styled.div``

export default App;
