import styled from "@emotion/styled";

const TodoMainStyled = styled.main`
    background-color: #fff;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%), 0 25px 50px 0 rgb(0 0 0 / 10%);
`;

function TodoMain() {
    return <TodoMainStyled>안녕하쇼</TodoMainStyled>;
}

export { TodoMain };
