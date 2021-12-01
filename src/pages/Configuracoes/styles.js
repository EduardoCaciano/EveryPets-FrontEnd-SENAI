import styled from "styled-components";

export const Configuracoes = styled.header`
  width: 100%;
  height: 92vh;
  justify-content: center;
  margin-top: 240px;

  > header {
    height: 25vh;
    width: 100%;
    display: flex;
    align-items: center;
    background-color: rgba(196, 196, 196, 0.73);

    > #imagem {
      height: 20vh;
      width: 10vw;
      padding: 10px;
      margin-left: 100px;

      > img {
        width: 100%;
        height: 100%;
        border-radius: 100px;
        box-sizing: border-box;
      }
    }

    > div {
      height: initial;
      width: initial;
      margin-left: 40px;

      * {
        font-family: Ropa Sans;
        font-size: 1.5em;
      }

      > h1 {
        font-size: 2.7em;
      }
    }
  }

  > main {
    height: 60%;
    width: 100%;
    align-items: center;
    justify-content: center;
    display: grid;

    > h2 {
      margin-top: 50px;
      font-family: Ropa Sans;
      font-size: 1.8em;
    }
  }
`;

export const FormContainer = styled.form`
  width: 900px;
  padding: 30px;
  align-items: center;
  flex-direction: column;

  box-shadow: 0px 5px 5px 5px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  background-color: #e9e9e9;
  border-radius: 15px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  margin-bottom: 50px;

  > #endereco {
    display: flex;

    > #caixaCep {
      width: 20%;
    }

    > #caixaRua {
      width: 70%;
      margin-left: 10px;
    }

    > #caixaNumero {
      width: 10%;
      margin-left: 10px;
    }
  }

  > #abaixoEndereco {
    display: flex;

    > #caixaBairro {
      width: 40%;
    }

    > #caixaCidade {
      width: 40%;
      margin-left: 10px;
    }

    > #caixaUf {
      width: 20%;
      margin-left: 10px;

      > select {
        width: 100%;
        height: 33px;
        margin-top: 25px;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 0.9em;
        border: 1px solid #c4c4c4;
        border-radius: 13px;
        color: #767676;

        :focus {
          border-bottom: 1px solid black;
        }
      }
    }
  }

  > #botoes {
    width: initial;
    height: inherit;
    margin-top: 15px;
    display: flex;
    align-items: center;

    > button {
      width: 300px;
      height: inherit;
      border-radius: 30px;
      margin-top: 15px;
      border-color: #a1bfed;
      background-color: #a1bfed;
      color: white;
      font-family: Arial, Helvetica, sans-serif;
      font-size: 20px;
      display: block;
      margin-left: auto;
      margin-right: auto;

        :hover {
        box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
          0 17px 50px 0 rgba(0, 0, 0, 0.19);
        }
    }
  }
`;
