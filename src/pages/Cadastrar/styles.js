import styled from "styled-components";


export const ContainerCadastro = styled.header`
    width: 100vw;
    height: 100vh;
    align-items: center;
    justify-content: center;

        >h1{
            margin-top: 100px;
            text-align: center;
            margin-left: auto;
            margin-right: auto;
            width: initial;
            height: initial;
            color: black;
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
    margin-top: 20px;

    >#containerTelefone{
        height: 22px;
        margin-top: 35px;
        display: flex;
        align-items: center;

        >#caixaDdd{
        width: 67px;
        height: 100px;
        display: flex;
        }
    
        >#caixaTelefone{
        margin-left: 15px;
        width: 100%;
        height: 100px;
        }
    }

    >#containerCepRua{
        height: 22px;
        margin-top: 35px;
        display: flex;
        align-items: center;

        >#caixaCep{
        width: 67px;
        height: 100px;
        display: flex;
        }
    
        >#caixaRua{
        margin-left: 15px;
        width: 100%;
        height: 100px;
        }
    }

    >#containerNComplemento{
        height: 22px;
        margin-top: 35px;
        display: flex;
        align-items: center;

        >#caixaNumero{
        width: 8%;
        height: 100px;
        }
    
        >#caixaComplemento{
        margin-left: 15px;
        width: 89%;
        height: 100px;
        }
        
        >#caixaUf{
        margin-left: 15px;
        width: 8%;
        height: 100px;
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