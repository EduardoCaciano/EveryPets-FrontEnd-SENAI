import styled from "styled-components";


export const ContainerCatalogo = styled.div`
    width: 100%;
    height: 100vh;
    align-items: center;
    justify-content: center;
    margin-top: 258px;
    *{margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    >#caixaFotoNome{
        height: 150px;
        width: 80%;
        background-color: var(--primary);
        align-items: center;
        margin-right: auto;
        margin-left: auto;
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
            
                 :hover{
                        transform: scale(1.1); 
                        cursor: pointer;
                        }
            }
        }

        >div{
            height: initial;
            width: 100%;
            align-items: center;
            display: grid;
            margin-right: -150px;

            >h1{
            height: initial;
            width: 90%;
            text-align: center;
            color: white;
            text-shadow: 0.1em 0.2em 0.3em black;
            margin-left: auto;
            margin-right: auto;
            }
            
            >h3{
            height: initial;
            width: 90%;
            text-align: center;
            color: white;
            text-shadow: 0.1em 0.2em 0.2em black;
            font-weight: initial;
            margin-left: auto;
            margin-right: auto;
            }
        }
    }

    >#servicos{
        height: 70px;
        width: 90%;
        align-items: center;
        display: flex;
        margin-right: auto;
        margin-left: auto;

        >h1{
            width: 100vw;
            text-align: center;
        }
    }

    >#adicionar{
        width: 80%;
        height: 50px;
        display: flex;
        align-items: center;
        margin-right: auto;
        margin-left: auto;

        >a{
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

    >#cardServicos{
        height: 190px;
        width: 80%;
        display: flex;
        align-items: center;
        margin-top: 25px;
        justify-content: space-around;
        margin-left: auto;
        margin-right: auto;

        >.cards{
            height: inherit;
            width: 15.6%;

            >.imagens{
                height: 150px;
                width: initial;
                display: flex;

                >.opcoes{
                    height: 23%;
                    width: 20%;

                    >img{
                        height: 100%;
                        width: 100%;

                        :hover{
                        transform: scale(1.1); 
                        cursor: pointer;
                        }
                    }
                }

                >.fotoCard{
                    height: 100%;
                    width: 80%;

                    >img{
                        height: 100%;
                        width: 100%;  
                        border-radius: 100%;
                    }
                }
            }

            >.nomeCard{
                text-align: center;
            }
        }
    }

    >#cirurgias{
        height: 100px;
        width: 80%;
        align-items: center;
        display: flex;
        background-color: var(--primary);
        margin-top: 25px;
        margin-right: auto;
        margin-left: auto;

        >h1{
            height: initial;
            width: 100%;
            text-align: center;
            text-shadow: 0.1em 0.2em 0.4em black;
            color: white;
        }
    }

    >#cardsCirurgias{
        height: initial;
        width: 80%;
        display: flex;
        flex-direction: row;
        margin-top: 25px;
        flex-wrap: wrap;
        justify-content: left;
        margin-left: auto;
        margin-right: auto;
        /* background-color: black; */
    }


`;


