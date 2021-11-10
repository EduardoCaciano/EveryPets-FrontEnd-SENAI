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

    >body{
        width: 100%;
        height: 250px;
        display: flex;
        align-items: center;
        justify-content: center;

        h2{
            height: initial;
            text-align: center;
            background-color: white;
        }

        p{
            height: 100%;
            padding-top: 15px;
            font-size: 20px;
            text-align: justify;
            padding-left: 60px;
            padding-right: 60px;
            padding-top: 20px;
        }

        >#mercado{
            height: 100%;
            width: 25%;
            border-right:solid #BDBDBD 2.5px;
        }

        >#missao{
            height: 100%;
            width: 25%;
            
        }

        >#valores{
            height: 100%;
            width: 25%;
            border-left:solid #BDBDBD 2.5px;
        }
    }

    >#tituloServicos{
        height: initial;
        width: 100%;
        align-items: center;
        justify-content: center;
        display: flex;
        margin-top: 20px;

            h1{
                width: 28%;
                height: initial;
                font-size: 40px;
                text-align: center;
                border-bottom:solid #666666 2px;
            }
    }

    >article{
        width: 100%;
        height: initial;
        display: flex;
        justify-content: center;
        margin-top: 25px;
        background-color: green;

        h3{
            width: 100%;
            height: initial;
            text-align: center;
            background-color: orange;
        }

        >.cards{
            width: 30%;
            height: 500px;
            border-radius: 20px;
            background-color: red;
            padding: 20px;
        }
    }

`;

