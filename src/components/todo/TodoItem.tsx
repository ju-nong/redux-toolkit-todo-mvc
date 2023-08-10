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
    display: flex;
    align-items: center;
    padding-left: 15px;

    &:last-child {
        border-bottom: none;
    }
`;

const TodoCheckButtonStyled = styled.button`
    width: 40px;
    height: 40px;
    border-radius: 100%;
    background-color: transparent;
    border: 2px solid #ededed;
    margin: 15px 0px;
    line-height: 40px;

    &.completed {
        border-color: rgb(210, 230, 227);

        &::before {
            content: "✔";
            color: #61c4b1;
        }
    }
`;

const TodoContentStyled = styled.div`
    flex: 1;
    padding: 15px;
    word-break: break-all;

    &.completed {
        color: #d9d9d9;
        text-decoration: line-through;
    }
`;

const TodoInputStyled = styled.input`
    flex: 1;
    height: 71px;
    padding: 15px;

    border: 1px solid #999;
    box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
`;

const TodoDestroyButtonStyled = styled.button`
    position: absolute;
    top: 50%;
    right: 20px;
    font-size: 30px;
    color: #cc9a9a;
    background-color: transparent;
    transition: color 0.2s ease-out;
    transform: translateY(-50%);

    &:hover {
        color: #af5b5e;
    }
`;

function TodoItem({ todo }: TodoItemProps) {
    return (
        <TodoItemStyled>
            <TodoCheckButtonStyled />
            <TodoContentStyled>{todo.text}</TodoContentStyled>
            {/* <TodoInputStyled type="text" value={todo.text} /> */}
            <TodoDestroyButtonStyled>×</TodoDestroyButtonStyled>
        </TodoItemStyled>
    );
}

export { TodoItem };
