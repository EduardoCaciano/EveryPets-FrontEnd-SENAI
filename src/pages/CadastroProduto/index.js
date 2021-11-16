import HeaderCadastro from "../../components/HeaderCadastro";
import HeaderHome from "../../components/HeaderHome";
import Input from "../../components/InputCadastro";
import { FormContainer } from "../CadastroProduto/styles";
import { ContainerCadastro } from "./styles";
import { signIn } from "../../services/security";
import { useState } from "react";
import { api } from "../../services/api";
import { useHistory } from "react-router";
import logo from "../../assents/gatoCadastro.png";

function Cadastrar() {
  

//   async function handleCadastro(e) {
//     e.preventDefault();

//     if (senha !== confirmarSenha) {
//       setErro("As senhas não conferem");
//       return;
//     }

//     setLoading(true);

//     const data = {
//       nome,
//       raca,
//       idade,
//       sexo,
//       descricao,
//       foto,
//       preco,
//       cidade,
//       estado,
//       telefone,
//       email,
//       senha,
//     };

//     try {
//       await api.post("/cadastro", data);
//       history.push("/");
//     } catch (err) {
//       setErro("Erro no cadastro");
//     }

//     setLoading(false);
//   }

  return (
    <>
      <HeaderHome />
      <ContainerCadastro>
        <h1>Cadastre seu produto</h1>

        <div id="containerGatinho">
          <img src={logo} />
        </div>

        <FormContainer>
          <Input label="Nome do Produto" id="produto" required />
          <Input label="Quantidade" id="quantidade" required />
          <Input label="Valor" id="valor" required />
          <Input label="Descrição" id="descricao" required />

          <div id="arquivos">
            <div id="caixaImagem">
              <Input label="Imagem" id="imagem" type="file" required />
            </div>
            <button>Upload</button>
          </div>

          <div id="botoes">
            <button>Confirmar</button>
            <button id="cancelar">Cancelar</button>
          </div>
        </FormContainer>
      </ContainerCadastro>
    </>
  );
}

export default Cadastrar;
