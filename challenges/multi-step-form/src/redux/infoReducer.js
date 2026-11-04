import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    personal_info: "",
    plan: "",
    addons: [],
}
const infoReducer = createSlice({
    name: "info",
    initialState,
    reducers:{
        setPersonalInfo: (state, action) => {
            state.personal_info = action.payload
        },
        setPlan: (state, action) => {
            state.plan = action.payload
        },
        setAddons: (state, action) => {
            state.plan = action.payload
        }
    }
})

export const {setPersonalInfo, setPlan, setAddons} = infoReducer.actions;
export default infoReducer.reducer;