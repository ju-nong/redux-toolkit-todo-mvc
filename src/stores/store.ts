import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todo";
import filterReducer from "./filter";

const store = configureStore({
    reducer: {
        todo: todoReducer,
        filter: filterReducer,
    },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
