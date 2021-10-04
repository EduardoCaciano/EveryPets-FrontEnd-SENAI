import styled from "styled-components";


export const ContainerCadastro = styled.header`
    width: 100vw;
    height: 80vh;
    align-items: center;
    justify-content: center;
    margin-top: 300px;

        >h1{
            margin-top: 100px;
            text-align: center;
            margin-left: auto;
            margin-right: auto;
            text-decoration: underline;
            width: initial;
            height: initial;
            color: black;
        }

        #containerGatinho{
            width: 900px;
            height: 70px;
            display: block;
            margin-right: auto;
            margin-left: auto;
            padding-top: 1px;

            >img {
                height: 100px;
                width: 300px;
                float: right;
                display: block;
            }
        }
        
`;

export const FormContainer = styled.form`
    width: 900px;
    padding: 30px;
    align-items: center;
    flex-direction: column;
    box-shadow: 0px 0px 20px #D9A467;
    background-color: var(--secundary);
    border-radius: 15px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 0px;

    >#arquivos{
        height: 25px;
        margin-top: 35px;
        display: flex;
        align-items: center;

        >#caixaImagem{
        width: 80%;
        height: 100px;
        font: 15px;  
        }
        
        >button {
        width: 20%;
        height: 35px;
        border-radius: 30px;
        border-color: #A1BFED;
        background-color: #A1BFED;
        color: black;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 13px;
        display:block;
        margin-left: 15px;
        margin-bottom: 15px;
        text-align: center;
        justify-content: center;
        }
    }

    
    >#botoes{
        width: initial;
        height: inherit;
        /* background-color: black; */
        margin-top: 15px;
        display: flex;
        align-items: center;

        >button {
        width: 300px;
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
        }

        >#cancelar {
        width: 300px;
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

`;