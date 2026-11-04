import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import api_url from "../api";

export const fetchIpData = createAsyncThunk(
  "ip_data/fetchIpData",
  async (ip_address) => {
    const response = await axios.get(api_url(ip_address));
    return response.data;
  }
);

const initialState = {
  isLoading: false,
  data: [],
};
const dataReducer = createSlice({
  name: "ip_data",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchIpData.pending, (state) => {
      state.isLoading = true;
    }),
      builder.addCase(fetchIpData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload
      }),
      builder.addCase(fetchIpData.rejected, (state) => {
        state.isLoading = false;
      });
  },
});


export default dataReducer.reducer;
