import styled from "styled-components";

export const ContainerSolicitacoes = styled.header`
    width: 100%;
    height: initial;
    align-items: center;
    display: grid;
    justify-content: center;
    margin-top: 300px;
    margin-bottom: 40px;
    
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
            border-radius: 25px;
            box-shadow: 3px 8px 10px 10px rgba(0, 0, 0, 0.25);
        }
`;
