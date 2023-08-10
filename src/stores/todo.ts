import { createSlice } from "@reduxjs/toolkit";

type Todo = {
    id: number;
    text: string;
    completed: boolean;
};
type Todos = Todo[];
const initialState: Todos = [];

let id = 0;

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) =>
            state.concat({ id: id++, text: action.payload, completed: false }),
        toggleCompleted: (state, action) =>
            state.map((todo) =>
                todo.id === action.payload
                    ? { ...todo, completed: !todo.completed }
                    : todo,
            ),
        destoryTodo: (state, action) =>
            state.filter(({ id }) => id !== action.payload),
    },
});

export { todoSlice };
export const { addTodo, toggleCompleted, destoryTodo } = todoSlice.actions;
export default todoSlice.reducer;

export type { Todo };
