import styled from "styled-components";
import imgDog from "../../assents/rato.png";
import sobre from "../../assents/sobre.png";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;

  > main {
    height: 68%;
    width: 100%;
    margin-top: 70px;
    background-image: url(${imgDog});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    align-items: center;
    justify-content: center;
    display: grid;

    > div {
      height: initial;
      width: initial;
      align-items: center;
      justify-content: center;
      display: grid;

      > h1 {
        height: 100px;
        width: initial;
        font-size: 60px;
        color: white;
        text-align: center;
        font-weight: lighter;
      }
    }
  }

  > section {
    height: 300px;
    width: 100%;
    display: flex;
    align-items: center;

    > #imagemSobreNos {
      height: 70%;
      width: 40%;
      background-image: url(${sobre});
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center;
    }

    > #tituloSobreNos {
      height: initial;
      width: 60%;
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center;
      font-size: 25px;
      font-family: monospace;
      padding-left: 145px;
    }
  }

  > body {
    width: 100%;
    height: 20vh;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 50px;

    h2 {
      height: initial;
      text-align: center;
      background-color: white;
    }

    p {
      height: 100%;
      padding-top: 15px;
      font-size: 20px;
      text-align: justify;
      padding-left: 60px;
      padding-right: 60px;
      padding-top: 20px;
    }

    > #mercado {
      height: 100%;
      width: 25%;
      border-right: solid #bdbdbd 2.5px;
    }

    > #missao {
      height: 100%;
      width: 25%;
    }

    > #valores {
      height: 100%;
      width: 25%;
      border-left: solid #bdbdbd 2.5px;
    }
  }

  > #tituloServicos {
    height: initial;
    width: 100%;
    align-items: center;
    justify-content: center;
    display: flex;
    margin-top: 100px;

    h1 {
      width: 28%;
      height: initial;
      font-size: 40px;
      text-align: center;
      border-bottom: solid #666666 2px;
    }
  }

  > article {
    width: 80%;
    height: initial;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 25px;
    display: flex;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 50px;

    h3 {
      width: 100%;
      height: initial;
      text-align: center;
    }

    > .cards {
      width: 18%;
      height: 22vh;
      border-radius: 20px;
      margin-left: 100px;
      margin-right: 100px;
      margin-top: 70px;
      box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.25);
      :hover {
        transform: scale(1.1);
        cursor: pointer;
      }

      > #titulo {
        width: 100%;
        height: 25%;
        background-color: var(--primary);
        border-radius: 20px 20px 0px 0px;
        align-items: center;
        display: flex;
        justify-content: center;
      }

      > #imagem {
        width: 100%;
        height: 75%;

        > img {
          width: 100%;
          height: 100%;
          border-radius: 0px 0px 20px 20px;
        }
      }
    }
  }
`;
