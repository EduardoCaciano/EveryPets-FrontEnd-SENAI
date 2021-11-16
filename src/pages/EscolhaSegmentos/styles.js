import styled from "styled-components";
import imgDog from "../../assents/segmento.jpg";
import petshop from "../../assents/petshop.png";
import veterinario from "../../assents/veterinario.jpg";

export const ContainerPrimary = styled.header`
  width: 100%;
  height: 86.4vh;
  align-items: center;
  justify-content: center;
  display: grid;
  margin-top: 70px;

  #containerTitulo {
    width: 500px;
    height: 146px;
    display: block;
    align-items: center;
    justify-content: center;
    background-image: url(${imgDog});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    margin-right: auto;
    margin-left: auto;
    margin-top: 100px;
  }

  > main {
    height: 300px;
    width: 900px;
    border-radius: 20px;
    display: flex;
    border-radius: 20px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 90px;

    a {
      width: 40%;
      height: 100%;
      text-decoration: none;
      > #petshop {
        width: 100%;
        height: 100%;
        background-color: var(--tertiary);
        display: grid;
        border-radius: 20px;
        box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.25);

        :hover {
          box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.25);
          transform: scale(1.1);
          cursor: pointer;
        }

        > #titulo {
          width: initial;
          height: 30%;
          align-items: center;
          justify-content: center;
          display: flex;
          border-radius: 20px 20px 0px 0px;
          background-color: var(--primary);
          color: white;
          font-family: Arial, Helvetica, sans-serif;
        }

        > #imagem {
          width: 100%;
          height: inherit;
          background-image: url(${petshop});
          background-repeat: no-repeat;
          background-size: contain;
          background-position: center;
          background-position: bottom;
          margin-top: -18%;
        }
      }
    }

    > #fantasma {
      height: 300px;
      width: 20%;
    }

    > a {
      width: 40%;
      height: 100%;
      text-decoration: none;

      > #veterinario {
        width: 100%;
        height: 100%;
        background-color: var(--tertiary);
        display: grid;
        border-radius: 20px;
        box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.25);

        :hover {
          box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.25);
          transform: scale(1.1);
          cursor: pointer;
        }

        > #titulo {
          width: initial;
          height: 30%;
          background-color: red;
          align-items: center;
          justify-content: center;
          display: flex;
          border-radius: 20px 20px 0px 0px;
          background-color: var(--primary);
          color: white;
        }

        > #imagem {
          width: 100%;
          height: inherit;
          background-image: url(${veterinario});
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center;
          background-position: bottom;
          background-color: var(--tertiary);
          margin-top: -18%;
        }
      }
    }
  }
`;
