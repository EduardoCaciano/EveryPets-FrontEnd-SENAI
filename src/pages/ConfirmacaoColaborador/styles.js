import styled from "styled-components";


export const ContainerPrimary = styled.header`
    width: 100%;
    height: 93.9vh;
    align-items: center;
    justify-content: center;
    display: flex;

        >main{
            height: initial;
            width: initial;
            border-radius: 20px;

            >header{
                height: initial;
                width: initial;
                background-color: var(--primary);
                align-items: center;
                justify-content: center;
                display: flex;
                border-radius: 20px 20px 0px 0px;

                >h1{
                    height: initial;
                    width: initial;
                    font-size: 30px;
                    padding: 10px 0px 10px 0px;
                   }
            }

            >#texto{
                height: 50%;
                width: initial;
                background-color: var(--secundary);
                align-items: center;
                justify-content: center;
                display: flex;

                >h3{
                    height: initial;
                    width: initial;
                    font-size: x-large;
                    font-weight: lighter;
                    padding: 20px;
                }
            }

            >#botoes{
                width: initial;
                height: initial;
                display: flex;
                align-items: center;
                background-color: var(--secundary);
                padding-bottom: 8px;
                border-radius: 0px 0px 20px 20px;

                >a{
                    width: 100%;
                    height: initial;
                    display: flex;
                    align-items: center;
                    padding-bottom: 8px;
                    border-radius: 0px 0px 20px 20px;
                    text-decoration: none;
                    :hover{
                        transform: scale(1.1);
                        transition: .2s;
                    }
                    :visited{
                        color: rgba(0, 0, 0, 0);
                    }

                    >button {
                    width: 150px;
                    height: inherit;
                    border-radius: 30px;
                    border-color: #1ACC2B;
                    background-color: #1ACC2B;
                    color: white;
                    font-family: Arial, Helvetica, sans-serif;
                    font-size: 15px;
                    display:block;
                    margin-left: auto;
                    margin-right: auto;
                    }

                    >#nao {
                    width: 150px;
                    height: inherit;
                    border-radius: 30px;
                    border-color: #E24513;
                    background-color: #E24513;
                    color: white;
                    font-family: Arial, Helvetica, sans-serif;
                    font-size: 15px;
                    display:block;
                    margin-left: auto;
                    margin-right: auto;
                    } 
                    >#nao:visited{
                        color: #1ACC;
                    }
                }
            }
        }
`;