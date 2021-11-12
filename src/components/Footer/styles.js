import styled from "styled-components";
import imgDog from "../../assents/logo2.png";

export const ContainerFooter = styled.footer`
    position: absolute;
    bottom: 0;
    background-color: var(--primary);
    width: 100%;
    height: 70px;    
    text-align: center;
    justify-content: center;
    display: flex;
    line-height: 80px;

    >footer{
        width: 100%;
        height: 100%;
        align-items: center;
        display: flex;
        flex-direction: row;
        justify-content: center;

        >#fantasma{
            height: 100%;
            width: 10%;
        }

        >h3{
            height: 100%;
            width: 80%;
            font-size: 15px;
            color: white;
        }

        >#imagem{
            height: 100%;
            width: 10%;
            background-image: url(${imgDog});
            background-repeat: no-repeat;
            background-size: contain;
            background-position: center;
        }
    }

    

`;

