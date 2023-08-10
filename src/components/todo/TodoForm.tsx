import React, { useMemo } from "react";
import styled from "@emotion/styled";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@stores/index";
import { addTodo, allCompletedTodo } from "@stores/todo";

const TodoFormStyled = styled.div`
    display: flex;
    width: 100%;
    row-gap: 15px;
    height: 65px;
    padding: 16px 16px 16px 0px;
    box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
`;

const AllCheckButtonStyled = styled.button`
    visibility: hidden;
    height: 100%;
    background-color: transparent;
    color: #e6e6e6;
    font-size: 22px;
    writing-mode: vertical-rl;
    line-height: 45px;

    &.show {
        visibility: visible;
    }

    &.active {
        color: #737373;
    }
`;

const TodoInputStyled = styled.input`
    border: 0;
    outline: 0;
    background-color: transparent;
    padding-left: 16px;
    line-height: 1.4em;
    font-size: 24px;

    &::placeholder {
        color: #e6e6e6;
        font-style: italic;
    }
`;

function TodoForm() {
    const todo = useSelector((state: RootState) => state.todo);
    const dispatch = useDispatch();

    const isAllCompleted = useMemo(
        () => todo.every((item) => item.completed),
        [todo],
    );

    function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
        if (event.key === "Enter") {
            const target = event.target as HTMLInputElement;
            let { value } = target;

            value = value.trim();

            if (value.length) {
                dispatch(addTodo(value));
                target.value = "";
            }
        }
    }

    return (
        <TodoFormStyled>
            <AllCheckButtonStyled
                className={`${todo.length ? "show" : ""} ${
                    isAllCompleted ? "active" : ""
                }`}
                onClick={() => dispatch(allCompletedTodo(isAllCompleted))}
            >
                ❯
            </AllCheckButtonStyled>
            <TodoInputStyled
                placeholder="What needs to be done?"
                onKeyDown={handleKeyDown}
            />
        </TodoFormStyled>
    );
}

export { TodoForm };
