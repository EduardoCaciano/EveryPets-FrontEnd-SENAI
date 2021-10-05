import styled from "styled-components";


export const ContainerCatalogo = styled.div`
    width: 100vw;
    height: 80vh;
    align-items: center;
    justify-content: center;
    margin-top: 258px;

    >#caixaFotoNome{
        height: 150px;
        width: 100vw;
        background-color: var(--primary);
        align-items: center;
        display: flex;

        >#foto{
            height: initial;
            width: 100px;
            margin-left: 50px;

            >img{
            height: 100px;
            border-radius: 100%;
            border: 1.8px solid black;
            }

            >h2{
            height: initial;
            width: inherit;
            text-align: center;
            color: black;
            font-weight: initial;
            text-align: center;
            font-size: 15px;
            }

            
        }

        >div{
            height: initial;
            width: 100vw;

            >h1{
            height: initial;
            width: inherit;
            text-align: center;
            color: white;
            text-shadow: 0.1em 0.2em 0.3em black;
            padding-right: 290px;
            }
            
            >h3{
            height: initial;
            width: inherit;
            text-align: center;
            color: white;
            text-shadow: 0.1em 0.2em 0.2em black;
            padding-right: 300px;
            font-weight: initial;
            }
        }
    }

    >#servicos{
        height: 70px;
        width: 100vw;
        align-items: center;
        display: flex;

        >#h1Servicos{
            height: initial;
            width: 54vw;

            >h1{
            text-align: right;
            }
        }
        
        >#h1Adicionar{
            display: flex;
            align-items: center;
            margin-right: auto;
            margin-left: auto;

            >h3{
            margin-left: auto;
            margin-right: auto;
            }

            >img{
            margin-left: 3px;
            height: 28px;
            border-radius: 100%;

                :hover{
                box-shadow: 0px 10px 10px rgba(0,0,0, 0.25);
                transform: scale(1.1); 
                cursor: pointer;
                }
            }
        }    
    }

    >#caixaCards{
        height: 230px;
        width: 100vw;
        display: flex;
        align-items: center;
        justify-content: space-around;

        >.cards{
            height: inherit;
            width: 15.6%;
            background-color: lime;

            >.imagens{
                height: 200px;
                width: initial;
                background-color: mediumblue;
            }

            >.nomeCard{
                text-align: center;
                font-family: Arial, Helvetica, sans-serif;
            }
        }
    }


`;


