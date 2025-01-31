import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    time: Date.now() // Store as a timestamp
};

const timeSlice = createSlice({
    name: "time",
    initialState,
    reducers: {
        updateTime: (state) => {
            state.time = Date.now(); // Update time as timestamp
        }
    }
});

export const { updateTime } = timeSlice.actions;
export default timeSlice.reducer;
