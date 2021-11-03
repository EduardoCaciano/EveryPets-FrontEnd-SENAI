import styled from "styled-components";



export const ContainerCadastro = styled.header`
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    display: grid;

    >h1{
            width: initial;
            height: initial;
            text-align: center;
            margin-left: auto;
            margin-right: auto;
            margin-top: 200px;
            color: black;
        }
        
`;

export const FormContainer = styled.form`
    width: initial;
    height: initial;
    padding: 30px;
    align-items: center;
    flex-direction: column;
    box-shadow: 0px 0px 20px #D9A467;
    background-color: var(--secundary);
    border-radius: 15px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 30px;

    

    >nav{
        height: initial;
        width: 30vw;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: left;

        
    }

    >#botoes{
        width: initial;
        height: inherit;
        margin-top: 15px;
        display: flex;
        align-items: center;

        >button {
        width: 200px;
        height: inherit;
        border-radius: 30px;
        margin-top: 15px;
        border-color: #1ACC2B;
        background-color: #1ACC2B;
        color: white;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 20px;
        display:block;
        margin-left: auto;
        margin-right: auto;
        padding: 10px 10px 10px 10px ;
        }

        >#cancelar {
        width: 200px;
        height: inherit;
        border-radius: 30px;
        margin-top: 15px;
        border-color: #E24513;
        background-color: #E24513;
        color: white;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 20px;
        display:block;
        margin-left: auto;
        margin-right: auto;
        }
    }

    >#botaoFinalizar{
        width: initial;
        height: inherit;
        margin-top: 15px;
        display: flex;
        align-items: center;

        >button {
        width: 200px;
        height: inherit;
        border-radius: 30px;
        margin-top: 15px;
        border-color: #1Ad;
        background-color: #1Ad;
        color: white;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 20px;
        display:block;
        margin-left: auto;
        margin-right: auto;
        }
    }

`;