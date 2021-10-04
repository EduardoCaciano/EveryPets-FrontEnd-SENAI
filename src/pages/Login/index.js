import { Container, FormContainer, ImagemDogLogin, TelaLogin } from "./styles";
import Header from "../../components/Header"
import Input from "../../components/Input";
import { signIn } from "../../services/security";
import { useState } from "react";
import { api } from "../../services/api";
import { useHistory } from "react-router";

function Login() {

    const history = useHistory();

    const [formLogin, setFormLogin] = useState({
        email: "",
        senha: ""
    });

    // handle input genérico
    const handleInput = (e) => {
        setFormLogin({ ...formLogin, [e.target.id]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await api.post("/sessions", {
                email: formLogin.email,
                password: formLogin.senha
            });

            signIn(response.data)

            history.push("/home");
        } catch (error) {
            console.log(error.response.data);
        }
    }

    return (
        <>
            <Header />
            <Container>
                <FormContainer onSubmit={handleSubmit}>
                    <Input label="E-mail" id="email" handler={handleInput} required />
                    <Input label="Senha" type="password" id="senha" handler={handleInput} required />
                    <button>
                        Entrar
                    </button>
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