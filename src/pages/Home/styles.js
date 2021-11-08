import styled from "styled-components";
import imgDog from "../../assents/rato.png";
import sobre from "../../assents/sobre.png";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    align-items: center;
    justify-content: center;

    >main{
        height: 68%;
        width: 100%;
        margin-top: 70px;
        background-image: url(${imgDog});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        align-items: center;
        justify-content: center;
        display: grid;

        >div{
            height: initial;
            width: initial;
            align-items: center;
            justify-content: center;
            display: grid;

                >h1{
                height: 100px;
                width: initial;
                font-size: 60px;
                color: white;
                text-align: center;
                font-weight: lighter;
                }
        }
    }

    >section{
        height: 300px;
        width: 100%;
        display: flex;
        align-items: center;

        >#imagemSobreNos{
            height: 70%;
            width: 40%;
            background-image: url(${sobre});
            background-repeat: no-repeat;
            background-size: contain;
            background-position: center;
        }

        >#tituloSobreNos{
            height: initial;
            width: 60%;
            background-repeat: no-repeat;
            background-size: contain;
            background-position: center;
            font-size: 25px;
            font-family: monospace;
            padding-left: 145px;
        }
    }

    

`;

