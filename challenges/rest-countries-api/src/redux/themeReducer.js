import { createSlice } from "@reduxjs/toolkit";

const ThemeReducer = createSlice({
    name: "theme",
    initialState:{
        theme: "light"
    },
    reducers:{
        changeTheme: (state) => {
            state.theme = state.theme === "light" ? "dark": "light";
        }
    }
})

export const {changeTheme} = ThemeReducer.actions;
export default ThemeReducer.reducer;