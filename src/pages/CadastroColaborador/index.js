import HeaderCadastro from "../../components/HeaderCadastro";
import Input from "../../components/InputCadastro";
import { FormContainer } from "../CadastroColaborador/styles";
import { ContainerCadastro } from "./styles";
import { signIn } from "../../services/security";
import { useState } from "react";
import { api } from "../../services/api";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import NomesColaboradores from "../../components/NomesColaborador";
import Footer from "../../components/Footer";

function Cadastrar() {
  const history = useHistory();

  const [loginColab, setLoginColab] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // handle input genérico
  const handleInput = (e) => {
    setLoginColab({ ...loginColab, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { name, email, password, confirmPassword } = loginColab;

      if (password !== confirmPassword) {
        alert("Senhas não conferem");
        return;
      }

      if (!name || !email || !password || !confirmPassword) {
        alert("Preencha todos os campos");
        return;
      }

      const response = await api.post("/colaborador", loginColab);
      signIn(response.data.token);

      history.push("/home");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <HeaderCadastro />
      <ContainerCadastro>
        <h1>Cadastro de colaborador</h1>

        <FormContainer onSubmit={handleSubmit}>
          <nav>
            <NomesColaboradores />
            <NomesColaboradores />
            <NomesColaboradores />
            <NomesColaboradores />
            <NomesColaboradores />
            <NomesColaboradores />
            <NomesColaboradores />
          </nav>
          <Input
            label="Nome"
            id="nome"
            handler={handleInput}
            value={loginColab.name}
            required
          />
          <Input 
          label="Email" 
          id="email" 
          handler={handleInput}
          value={loginColab.email} 
          required />
          <Input 
          label="Senha" 
          id="senha" 
          handler={handleInput} 
          value={loginColab.password}
          required />
          <Input
            label="Confirme sua Senha"
            id="confimeSenha"
            handler={handleInput}
            value={loginColab.confirmPassword}
            required
          />
          <div id="botoes">
            <button>Confirmar</button>
            <button id="cancelar">Limpar</button>
          </div>
          <div id="botaoFinalizar">
            <Link to="/catalogo">
              <button>Finalizar</button>
            </Link>
          </div>
        </FormContainer>
      </ContainerCadastro>
      <Footer />
    </>
  );
}

export default Cadastrar;
