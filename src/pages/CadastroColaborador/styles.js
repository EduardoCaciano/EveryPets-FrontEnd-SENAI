import styled from "styled-components";

export const ContainerCadastro = styled.header`
  width: 100%;
  height: 93.9vh;
  align-items: center;
  justify-content: center;
  display: grid;

  > h1 {
    width: initial;
    height: initial;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    margin-top: 150px;
    color: black;
  }
`;

export const FormContainer = styled.form`
  width: initial;
  height: initial;
  padding: 30px;
  align-items: center;
  flex-direction: column;
  box-shadow: 0px 0px 20px #d9a467;
  background-color: var(--secundary);
  border-radius: 15px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 30px;

  > nav {
    height: initial;
    width: 30vw;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: left;
  }

  > #botoes {
    width: initial;
    height: inherit;
    margin-top: 15px;
    display: flex;
    align-items: center;

    > button {
      width: 200px;
      height: inherit;
      border-radius: 30px;
      margin-top: 15px;
      border-color: #1acc2b;
      background-color: #1acc2b;
      color: white;
      font-family: Arial, Helvetica, sans-serif;
      font-size: 20px;
      display: block;
      margin-left: auto;
      margin-right: auto;
      padding: 10px 10px 10px 10px;
      :hover {
        transform: scale(1.1);
        transition: 0.2s;
      }
    }

    > #cancelar {
      width: 200px;
      height: inherit;
      border-radius: 30px;
      margin-top: 15px;
      border-color: #e24513;
      background-color: #e24513;
      color: white;
      font-family: Arial, Helvetica, sans-serif;
      font-size: 20px;
      display: block;
      margin-left: auto;
      margin-right: auto;
      :hover {
        transform: scale(1.1);
        transition: 0.2s;
      }
    }
  }

  > #botaoFinalizar {
    width: initial;
    height: inherit;
    margin-top: 15px;
    display: flex;
    align-items: center;

    > a {
      width: 100%;
      height: initial;
      text-decoration: none;

      > button {
        width: 200px;
        height: inherit;
        border-radius: 30px;
        margin-top: 15px;
        border-color: #1ad;
        background-color: #1ad;
        color: white;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 20px;
        display: block;
        margin-left: auto;
        margin-right: auto;
      }
    }
  }
`;
