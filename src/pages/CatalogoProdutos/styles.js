import styled from "styled-components";


export const ContainerCatalogo = styled.div`
    width: 100vw;
    height: 80vh;
    align-items: center;
    justify-content: center;
    margin-top: 258px;
    *{margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

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

        >h1{
            width: 100vw;
            text-align: center;
        }
    }

    >#adicionar{
        width: 100vw;
        height: 50px;
        display: flex;
        align-items: center;

            >h3{
            margin-left: 105px;
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

    >#cardServicos{
        height: 230px;
        width: 100vw;
        display: flex;
        align-items: center;
        margin-top: 25px;
        justify-content: space-around;

        >.cards{
            height: inherit;
            width: 15.6%;

            >.imagens{
                height: 200px;
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
        width: 100vw;
        align-items: center;
        display: flex;
        background-color: var(--primary);
        margin-top: 25px;

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
        width: 85vw;
        display: flex;
        flex-direction: row;
        margin-top: 25px;
        flex-wrap: wrap;
        justify-content: space-evenly;
        background-color: blanchedalmond;
        margin-left: auto;
        margin-right: auto;

        >#cardsProdutos{
            margin-top: 25px;
            width: 280px;
            height: 320px;
            background-color: indianred;
        }
    }


`;


