import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import getAPI from "../api";

//getting the data from the api
export const fetchCountries = createAsyncThunk(
  "countries/fetchCountries",
  async (req={}) => {
    const response = await axios.get(getAPI(req.type, req.name));
    return response.data;
  }
);

const initialState = {
  allCountries: [],
  isLoading: false,
};

const CountriesReducer = createSlice({
  name: "countries",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchCountries.pending, (state) => {
        state.isLoading = true;
    })
    builder.addCase(fetchCountries.fulfilled, (state, action) => {
        state.isLoading = false;
        state.allCountries = action.payload
    })
    builder.addCase(fetchCountries.rejected, (state, action) => {
        state.isLoading = false;
        state.allCountries = [];
        console.log("Fetching error!")
    })
  }
});

export default CountriesReducer.reducer;
