import styled from "styled-components";


export const ContainerSolicitacoes = styled.header`
    width: 100vw;
    height: 50vh;
    align-items: center;
    display: grid;
    justify-content: center;
    margin-top: 300px;

        >h1{
            text-align: center;
            text-decoration: underline;
            width: initial;
            height: initial;
            color: black;
        }

        >nav{
            margin-top: 10px;
            height: inherit;
            width: 100%;
            display: grid;
            justify-content: center;
            background-color: var(--secundary);

            >#cardAtendimento{
                height: 300px;
                width: 80%;
                background-color: gold;
                margin-top: 30px;
                border-radius: 30px;
                margin-left: auto;
                margin-right: auto;
                display: grid;
                
                    >#header{
                    height: 150px;
                    width: 100%;
                    display: grid;
                    background-color: blue;

                        >#dadosHorario{
                        height: 80px;
                        width: 100%;
                        margin-top: 15px;
                        display: flex;

                            >#dadosUsuario{
                                width: 80%;
                                height: 80px;
                                float: left;
                                margin-left: 25px;
                            }
                            
                            >#horario{
                                width: 20%;
                                height: 80px;
                                float: right;
                                margin-right: 25px;

                                >h3{
                                    text-align: right;
                                }
                            }
                        }
                    
                        >#dadosAnimalHeader{
                            height: 50px;
                            width: 96%;
                            margin-left: 25px;
                            margin-right: 25px;
                        }
            
            
                    }

                    >#footer{
                    height: 150px;
                    width: 100%;
                    display: grid;
                    background-color: pink;

                        >#imagem{
                            height: 50px;
                            width: 50px;
                            background-color: red;

                            >img{
                                
                            }

                        }
                    }
            }    
        }
`;
