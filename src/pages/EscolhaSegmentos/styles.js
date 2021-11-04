import styled from "styled-components";
import imgDog from "../../assents/segmento.png";
import petshop from "../../assents/petshop.png";
import veterinario from "../../assents/veterinario.png";


export const ContainerPrimary = styled.header`
    width: 100vw;
    height: 100vh;
    align-items: center;
    justify-content: center;
    display: grid;
    

        #containerTitulo{
            width: inherit;
            height: 146px;
            display: block;
            align-items: center;
            justify-content: center;
            background-image: url(${imgDog});
            background-repeat: no-repeat;
            background-size: contain;
            background-position: center;
            margin-right: auto;
            margin-left: auto;
            margin-top: 70px;
        }

        >main{
            height: 300px;
            width: 60%;
            border-radius: 20px;
            display: flow-root;
            border-radius: 20px;
            background-color: lightsalmon;
            margin-left: auto;
            margin-right: auto;

            >#petshop{
                width: 45%;
                height: 100%;
                background-color: lime;
                float: left;
                display: grid;
                border-radius: 20px;


                >#titulo{
                    width: initial;
                    height: 30%;
                    background-color: red;
                    align-items: center;
                    justify-content: center;
                    display: flex;
                    border-radius: 20px 20px 0px 0px;
                    background-color: var(--primary);

                }

                >#imagem{
                    width: inherit;
                    height: inherit;
                    background-image: url(${petshop});
                    background-repeat: no-repeat;
                    background-size: contain;
                    background-position: center;
                    background-position: bottom;
                    background-color: khaki;

                }
            }
            
            >#veterinario{
                width: 45%;
                height: inherit;
                background-color: pink;
                display: grid;
                float: right;
                border-radius: 20px;

                >#titulo{
                    width: initial;
                    height: 30%;
                    background-color: red;
                    align-items: center;
                    justify-content: center;
                    display: flex;
                    border-radius: 20px 20px 0px 0px;
                    background-color: var(--primary);
                }

                >#imagem{
                    width: inherit;
                    height: inherit;
                    background-image: url(${veterinario});
                    background-repeat: no-repeat;
                    background-size: contain;
                    background-position: center;
                    background-position: bottom;
                    background-color: khaki;

                }
                
            }
        }
`;