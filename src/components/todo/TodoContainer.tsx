import React from "react";
import { TodoList, TodoNavigation } from "@components/todo";

function TodoContainer() {
    return (
        <section>
            <TodoList />
            <TodoNavigation />
        </section>
    );
}

export { TodoContainer };
