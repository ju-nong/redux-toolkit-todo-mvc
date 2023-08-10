import { createSlice } from "@reduxjs/toolkit";

type Filter = "all" | "active" | "completed";

const initialState: Filter = "all";

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        setFilter: (state, action) => (state = action.payload),
    },
});

export { filterSlice };
export const { setFilter } = filterSlice.actions;
export default filterSlice.reducer;
export type { Filter };
