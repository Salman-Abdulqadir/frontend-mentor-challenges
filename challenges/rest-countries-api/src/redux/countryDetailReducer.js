import { createSlice } from "@reduxjs/toolkit";

const CountryDetailsSlice = createSlice({
    name: "countryDetails",
    initialState: {
        details: []
    },
    reducers:{
        setDetails: (state, action) => {
            state.details = action.payload
        },
        removeDetails: (state, action) => {
            state.details = [];
        }
    }
})

export const {setDetails, removeDetails} = CountryDetailsSlice.actions;
export default CountryDetailsSlice.reducer;