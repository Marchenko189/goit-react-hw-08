import { createSlice } from "@reduxjs/toolkit";

const filters = createSlice({
    name: 'filters',
    initialState: {
        name: "",
    },
    reducers: {
        changeFilter: (state, action) => {
                state.name = action.payload
            }
    }
})


export default filters.reducer;

export const { changeFilter } = filters.actions;