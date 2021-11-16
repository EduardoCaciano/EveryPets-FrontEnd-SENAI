import styled from "styled-components";
import imgDog from "../../assents/cachorroLogin.png";

export const Container = styled.div`
  width: 100%;
  height: 93.9vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${imgDog});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`;

export const FormContainer = styled.form`
  width: 500px;
  padding: 30px;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 15px;
  box-shadow: 0px 0px 20px #00000055;
  > button {
    width: inherit;
    height: inherit;
    border-radius: 30px;
    margin-top: 15px;
    border-color: #d28224;
    background-color: #d28224;
    color: white;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;
    display: block;
  }
  > #lembrarSenha {
    margin-top: 15px;
    display: flex;
    margin-left: 300px;
    > p {
      font-size: 15px;
      display: flex;
      color: white;
    }
    > input {
      height: 15px;
      width: 15px;
      margin-left: 10px;
      border: 2px solid black;
    }
  }
  > nav {
    width: inherit;
    height: 35px;
    text-align: center;
    margin-top: 15px;
    > p {
      margin-top: 5px;
      color: white;
      font-size: 15px;
    }

    > a {
      width: initial;
      height: initial;
      text-decoration: none;

      > #cadastre {
        font-weight: bold;
        color: white;
      }
      > #cadastre:hover {
        transform: scale(1.1);
        transition: 0.1s;
      }
    }
  }
`;
