import styled from "styled-components";
import imgDog from "../../assents/catalogo.png";

export const ContainerCards = styled.header`

        >#cardsProdutos{
            width: 280px;
            height: 320px;
            max-width: 250px;
            margin: 25px auto;
            padding: 5px;

            >.imagens{
                height: 200px;
                width: initial;
                display: flex;
                align-items: flex-start;
                background-color: black;
                background-image: url(${imgDog});
                background-repeat: no-repeat;
                background-size: cover;
                background-position: center;
                border-top-left-radius: 8%;
                border-top-right-radius: 8%;

                
                >#editar{
                    height: 30%;
                    width: 30%;
                    margin-left: 10px;

                    >img{
                        height: 100%;
                        width: 100%;

                        :hover{
                        transform: scale(1.1);
                        cursor: pointer;
                        }
                    }
                }

                >#lixo{
                    height: 30%;
                    width: 30%;
                    margin-left: 150px;
        
                    >img{
                        height: 100%;
                        width: 100%;

                        :hover{
                        transform: scale(1.1);
                        cursor: pointer;
                        }
                    }
                }

            
            
            
            
            
            }
            
            >#informacoes{
                >h2{
                    color: rgb(102, 102, 102);
                    font-size: 20px;
                    line-height: 18px;
                    min-height: 36px;
                    display: -webkit-box;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    margin-top: 10px;
                }

                >h1{
                    color: rgb(51, 51, 51);
                    font-size: 20px;
                    font-weight: bold;
                    display: flex;
                    -webkit-box-align: center;
                    align-items: center;
                    min-height: 22px;
                }

                >h3{
                    display: flex;
                    font-size: 13px;
                    min-height: 14px;
                    color: rgb(102, 102, 102);
                    margin-bottom: 10px;
                    text-decoration: line-through red;
                }
                
                >#parcelamento{
                    display: flex;
                    font-size: 13px;
                    min-height: 14px;
                    color: rgb(102, 102, 102);
                    margin-bottom: 10px;
                    text-decoration: none;
                }
            }
        }
`;

