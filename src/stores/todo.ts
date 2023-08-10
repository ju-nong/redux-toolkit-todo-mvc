import { createSlice } from "@reduxjs/toolkit";

type Todo = {
    text: String;
    completed: Boolean;
};
type Todos = Todo[];
const initialState: Todos = [];

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) =>
            state.concat({ text: action.payload, completed: false }),
    },
});

export { todoSlice };
export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;

export type { Todo };
