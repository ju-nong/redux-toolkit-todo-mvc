import React, { useState } from "react";
import styled from "@emotion/styled";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@stores/index";
import { Filter, setFilter } from "@stores/filter";

const TodoNavigationStyled = styled.article`
    width: 100%;
    color: #777;
    padding: 10px 15px;
    text-align: center;
    border-top: 1px solid #e6e6e6;
    position: relative;
    display: flex;
    justify-content: center;

    &::before {
        content: "";
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        height: 50px;
        overflow: hidden;
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 8px 0 -3px #f6f6f6,
            0 9px 1px -3px rgba(0, 0, 0, 0.2), 0 16px 0 -6px #f6f6f6,
            0 17px 2px -6px rgba(0, 0, 0, 0.2);
        z-index: 1;
    }

    > span {
        position: absolute;
        left: 15px;
        top: 50%;
        transform: translateY(-50%);
    }

    > ul {
        z-index: 2;
        list-style: none;
        display: flex;
        column-gap: 10px;

        > li {
            padding: 3px 7px;
            cursor: pointer;
            border: 1px solid transparent;
            border-radius: 3px;
            text-transform: capitalize;

            &:hover {
                border-color: rgba(175, 47, 47, 0.1);
            }

            &.active {
                border-color: rgba(175, 47, 47, 0.2);
            }
        }
    }
`;

function TodoNavigation() {
    const todo = useSelector((state: RootState) => state.todo);
    const filter = useSelector((state: RootState) => state.filter);
    const dispatch = useDispatch();

    const filterList: Filter[] = ["all", "active", "completed"];

    return (
        <TodoNavigationStyled>
            <span>
                {todo.filter((item) => !item.completed).length} item left
            </span>
            <ul>
                {filterList.map((item) => (
                    <li
                        key={item}
                        className={item === filter ? "active" : ""}
                        onClick={() => dispatch(setFilter(item))}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </TodoNavigationStyled>
    );
}

export { TodoNavigation };
