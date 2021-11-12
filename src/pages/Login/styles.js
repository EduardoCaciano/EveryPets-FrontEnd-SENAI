import styled from "styled-components";
import imgDog from "../../assents/cachorroLogin.png";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url(${imgDog});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
`;

export const FormContainer = styled.form`
    width: 500px;
    padding: 30px;
    display: flex;
    align-items: center;
    flex-direction: column;
    border-radius: 15px;
    box-shadow: 0px 0px 20px #00000055;

    >button {
        width: inherit;
        height: inherit;
        border-radius: 30px;
        margin-top: 15px;
        border-color: #D28224;
        background-color: #D28224;
        color: white;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 20px;
        display:block;
    }

    >#lembrarSenha {
        margin-top: 15px;
        display: flex;
        margin-left: 300px;

        >p{
        font-size: 15px;
        display: flex;
        color: white;
        }

        >input{
        height: 15px;
        width: 15px;
        margin-left: 10px;
        border: 2px solid black;
        }
    }

    >nav{
       width: inherit;
       height: 35px;
       text-align: center;
       margin-top: 15px;

       >p{
           margin-top: 5px;
           color: white;
           font-size: 15px;
       }

       >#cadastre{
            font-weight: bold;
       }

       >#cadastre:hover{
        transform: scale(1.1);
        transition: .0.1s;
    }
   }

`;

