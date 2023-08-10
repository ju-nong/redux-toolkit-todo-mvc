import { useMemo } from "react";
import styled from "@emotion/styled";
import { TodoItem } from "@components/todo";
import { useSelector } from "react-redux";
import { RootState } from "@stores/index";

const TodoListStyled = styled.ul`
    display: flex;
    flex-direction: column;
    list-style: none;
    width: 100%;
`;

function TodoList() {
    const todo = useSelector((state: RootState) => state.todo);
    const { value: filter } = useSelector((state: RootState) => state.filter);

    const filteringTodo = useMemo(
        () =>
            filter === "all"
                ? todo
                : filter === "active"
                ? todo.filter((item) => !item.completed)
                : todo.filter((item) => item.completed),
        [todo, filter],
    );

    return (
        <TodoListStyled>
            {filteringTodo.map((item) => (
                <TodoItem key={item.id} todo={item} />
            ))}
        </TodoListStyled>
    );
}

export { TodoList };
