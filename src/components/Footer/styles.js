import styled from "styled-components";
import imgDog from "../../assents/logo2.png";

export const ContainerFooter = styled.footer`
  width: 100%;
  display: flex;
  justify-content: right;
  align-items: center;
  background-color: var(--primary);
  color: #fff;
  font-size: 1em;
  padding: 10px;
  /* margin-top: 20px; */

  > #fantasma {
    height: 100%;
    width: 5%;
  }

  > h3 {
    font-family: Arial, Helvetica, sans-serif;
    height: 100%;
    font-size: 1em;
    color: white;
    font-weight: lighter;
    margin-left: auto;
    margin-right: auto;
  }

  > #imagem {
    height: 4vh;
    width: 3vw;
    float: left;
    background-image: url(${imgDog});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-color: black;
  }

  /* position: absolute;
    bottom: 0;
    background-color: var(--primary);
    width: 100%;
    height: 70px;    
    text-align: center;
    justify-content: center;
    display: flex;
    line-height: 80px;
    position: fixed;
    left:0;

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




    } */
`;
