import React from "react";
import styled from "@emotion/styled";

const TodoFormStyled = styled.div`
    display: flex;
    width: 100%;
    row-gap: 15px;
    height: 65px;
    padding: 16px 16px 16px 0px;
`;

const AllCheckButtonStyled = styled.button`
    height: 100%;
    background-color: transparent;
    color: #e6e6e6;
    font-size: 22px;
    writing-mode: vertical-rl;
    line-height: 45px;

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
    return (
        <TodoFormStyled>
            <AllCheckButtonStyled>❯</AllCheckButtonStyled>
            <TodoInputStyled placeholder="What needs to be done?" />
        </TodoFormStyled>
    );
}

export { TodoForm };
