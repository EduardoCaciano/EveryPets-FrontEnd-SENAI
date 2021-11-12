import { Container, FormContainer, ImagemDogLogin, TelaLogin } from "./styles";
import Header from "../../components/Header";
import Input from "../../components/Input";
import { signIn } from "../../services/security";
import { useState } from "react";
import { api } from "../../services/api";
import { useHistory } from "react-router";
import Footer from "../../components/Footer";

function Login() {
  const history = useHistory();

  const [isLoading, setIsLoading] = useState(false);

  const [message, setMessage] = useState(undefined);

  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setIsLoading(true);

    try {
      const response = await api.post("/session", login);

      console.log(response.data);

      signIn(response);

      setIsLoading(false);

      history.push("/catalogo");
    } catch (error) {
      console.error(error);
      setMessage({ title: "Ops...", description: error.response });
      setIsLoading(false);
      console.log("login nao efetuado");
    }
  };

  const handleInput = (e) => {
    setLogin({ ...login, [e.target.id]: e.target.value });
  };

  return (
    <>
      <Header />
      <Container>
        <alert message={message} type="error" handleClose={setMessage} />
        <FormContainer onSubmit={handleSubmit}>
          <Input
            label="E-mail"
            id="email"
            value={login.email}
            handler={handleInput}
            required
          />
          <Input
            label="Senha"
            type="password"
            id="password"
            value={login.password}
            handler={handleInput}
            required
          />
          <button>Entrar</button>
          <div id="lembrarSenha">
            <p>Lembrar Senha</p>
            <input type="checkbox" />
          </div>
          <nav>
            <p>Esqueceu a Senha?</p>
            <p id="cadastre">Novo aqui? Cadastre-se</p>
          </nav>
        </FormContainer>
      </Container>
    </>
  );
}

export default Login;
