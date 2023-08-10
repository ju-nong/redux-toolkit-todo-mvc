import React from "react";
import styled from "@emotion/styled";
import { Todo } from "@stores/todo";

interface TodoItemProps {
    todo: Todo;
}

const TodoItemStyled = styled.li`
    position: relative;
    font-size: 24px;
    border-bottom: 1px solid #ededed;

    &:last-child {
        border-bottom: none;
    }
`;

function TodoItem({ todo }: TodoItemProps) {
    return <TodoItemStyled>{todo.text}</TodoItemStyled>;
}

export { TodoItem };
