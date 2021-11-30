import { Container, FormContainer, ImagemDogLogin, TelaLogin } from "./styles";
import Header from "../../components/Header"
import Input from "../../components/Input";
import { signIn } from "../../services/security";
import { useState } from "react";
import { api } from "../../services/api";
import { useHistory } from "react-router";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

function Login() {

    const history = useHistory();

    const [formLogin, setFormLogin] = useState({
        email: "",
        password: ""
    });

    // handle input genérico
    const handleInput = (e) => {
        setFormLogin({ ...formLogin, [e.target.id]: e.target.value });
    }

    const handleSubmit = async (e) => {
        //e.preventDefault();

        try {
            const response = await api.post("/sessionEstablishment", {
                email: formLogin.email,
                password: formLogin.password
            });

            signIn(response.data)

            history.push("/agendados");
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <Header />
            <Container>
                <FormContainer onSubmit={handleSubmit}>
                    <Input label="E-mail" id="email" handler={handleInput} required />
                    <Input label="Senha" type="password" id="password" handler={handleInput} required />
                    <button>
                        Entrar
                    </button>
                    <div id="lembrarSenha">
                        <p>Lembrar Senha</p>
                        <input type="checkbox" />
                    </div>
                    <nav>
                        <p>Esqueceu a Senha?</p>
                        <Link to="/EscolhaSegmento"><p id="cadastre">Novo aqui? Cadastre-se</p></Link>
                    </nav>
                </FormContainer>
            </Container>
            <Footer />
        </>
    );
}

export default Login;