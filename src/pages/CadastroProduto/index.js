import HeaderHome from "../../components/HeaderHome";
import Input from "../../components/InputCadastro";
import { FormContainer } from "../CadastroProduto/styles";
import { ContainerCadastro } from "./styles";
import logo from "../../assents/gatoCadastro.png";
import FooterSecundario from "../../components/FooterSecundario";
import { useHistory } from "react-router";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { signIn } from "../../services/security";

function Cadastrar() {
  const history = useHistory();
  const [produto, setProduto] = useState({
    name: "",
    amount: "",
    value: "",
    description: "",
    image: "",
  });

  const handleInputProduto = (event) => {
    setProduto({
      ...produto,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { name, amount, value, description } = produto;

      if (name === "" || amount === "" || value === "" || description === "") {
        alert("Preencha todos os campos");
        return;
      }

      const response = await api.post("/service", produto);

      signIn(response.data.token);
    } catch (err) {
      console.log(err);
    }
  };

  console.log(produto);

  return (
    <>
      <HeaderHome />
      <ContainerCadastro>
        <h1>Cadastre seu produto</h1>

        <div id="containerGatinho">
          <img src={logo} />
        </div>

        <FormContainer onSubmit={handleSubmit}>
          <Input
            label="Nome do Produto"
            id="name"
            value={produto.name}
            handler={handleInputProduto}
            required
          />
          <Input
            label="Quantidade"
            id="amount"
            value={produto.amount}
            handler={handleInputProduto}
            required
          />
          <Input
            label="Valor"
            id="value"
            value={produto.value}
            handler={handleInputProduto}
            required
          />
          <Input
            label="Descrição"
            id="description"
            value={produto.description}
            handler={handleInputProduto}
            required
          />

          <div id="arquivos">
            <div id="caixaImagem">
              <Input label="Imagem" id="imagem" type="file"  />
            </div>
            <button>Upload</button>
          </div>

          <div id="botoes">
            <button>Confirmar</button>
            <button
              id="cancelar"
              onClick={() => history.push("/cadastro_produto")}
            >
              Cancelar
            </button>
          </div>
        </FormContainer>
        <FooterSecundario />
      </ContainerCadastro>
    </>
  );
}

export default Cadastrar;
