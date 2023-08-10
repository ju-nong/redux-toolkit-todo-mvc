import { createSlice } from "@reduxjs/toolkit";

type Todo = {
    text: String;
    checked: Boolean;
};
type Todos = Todo[];
const initialState: Todos = [];

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) =>
            state.concat({ text: action.payload, checked: false }),
    },
});

export { todoSlice };
export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;
