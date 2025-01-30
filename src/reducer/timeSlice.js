import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    time: new Date(),
};

const timeSlice = createSlice({
    name: "time",
    initialState,
    reducers: {
        updateTime: (state) => {
            state.time = new Date();
        },
    },
});

export const { updateTime } = timeSlice.actions;
export default timeSlice.reducer;
