import styled from "styled-components";

export const ContainerSolicitacoes = styled.header`
    width: 100%;
    height: 50vh;
    align-items: center;
    display: grid;
    justify-content: center;
    margin-top: 300px;
    *{
        font-weight: lighter;
    }

        >h1{
            font-family: sans-serif,Arial;
            text-align: center;
            text-decoration: underline;
            width: initial;
            height: initial;
            color: black;
            font-weight: bold;
        }

        >nav{
            margin-top: 10px;
            height: initial;
            width: 100%;
            display: grid;
            justify-content: center;
            background-color: var(--secundary);
        }
`;
