import { configureStore } from "@reduxjs/toolkit";

//importing reducers
import CountriesReducer from "./countriesReducer";
import CountryDetailReducer from "./countryDetailReducer";
import ThemeReducer from "./themeReducer";

const store = configureStore({
  reducer: {
    countries: CountriesReducer,
    countryDetails: CountryDetailReducer,
    theme: ThemeReducer
  },
});

export default store;

