import styled from "styled-components";
import tartaro from "../../assents/tartaro.jpg"

export const Cards = styled.header`

>#cardAtendimento{
                height: 300px;
                width: 80%;
                background-color: white;
                margin: 15px;
                margin-left: auto;
                margin-right: auto;
                display: grid;
                border-radius: 15px;
                
                    >#header{
                    height: 150px;
                    width: 100%;
                    display: grid;
                    background-color: white;
                    border-radius: 15px;

                        >#dadosHorario{
                        height: 80px;
                        width: 100%;
                        margin-top: 15px;
                        display: flex;

                            >#dadosUsuario{
                                width: 80%;
                                height: 83%;
                                float: left;
                                margin-left: 25px;
                            }
                            
                            >#horario{
                                width: 20%;
                                height: 83%;
                                float: right;
                                margin-right: 25px;

                                >h3{
                                    text-align: right;
                                }
                            }
                        }

                        >#linha{
                         width: 98%;
                         height: 5px;
                         background-color: var(--primary);
                         border-radius: 5px;
                         margin-right: auto;
                         margin-left: auto;
                         margin-top: -8px;
                        }

                        >#caixaDadosAnimalBotoes{
                            height: 50px;
                            width: 96%;
                            margin-left: 25px;
                            margin-right: 25px;
                            display: flex;


                            >#dadosAnimalHeader{
                            height: 50px;
                            width: 50%;
                            }

                            >#botoes{
                                width: 50%;
                                height: inherit;
                                display: flex;
                                align-items: center;
                                float: left;

                                >button {
                                width: 28%;
                                height: initial;
                                border-radius: 30px;
                                border-color: #1ACC2B;
                                background-color: #1ACC2B;
                                color: white;
                                font-family: Arial, Helvetica, sans-serif;
                                font-size: 12px;
                                display:block;
                                margin-left: auto;
                                margin-right: auto;
                                }

                                >#reagendar{
                                    width: 28%;
                                    height: initial;
                                    border-radius: 30px;
                                    border-color: #D9AD36;
                                    background-color: #D9AD36;
                                    color: white;
                                    font-family: Arial, Helvetica, sans-serif;
                                    font-size: 12px;
                                    display:block;
                                    margin-left: auto;
                                    margin-right: auto;
                                }

                                >#cancelar {
                                width: 28%;
                                height: initial;
                                border-radius: 30px;
                                border-color: #E24513;
                                background-color: #E24513;
                                color: white;
                                font-family: Arial, Helvetica, sans-serif;
                                font-size: 12px;
                                display:block;
                                margin-left: auto;
                                margin-right: auto;
                                }
                            }
                        }
                    

            
            
                    }

                    >#footer{
                    height: 150px;
                    width: 100%;
                    display: grid;
                    background-color: #D9D7D7;
                    align-items: center;
                    display: flex;
                    border-radius: 15px;

                        >#imagem{
                            height: 130px;
                            width: 20%;
                            background-image: url(${tartaro});
                            background-repeat: no-repeat;
                            background-size: cover;
                            background-position: center;
                            margin-left: 15px;
                        }

                        >#dadosAnimalFooter{
                            height: 90%;
                            width: 50%;
                            margin-left: 15px;

                            
                        }

                        >#campoConfirmacao{
                            height: 90%;
                            width: 27%;
                            text-align: center;
                            align-items: center;

                            

             
    }
                    }
            }

`;

