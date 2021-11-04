import HeaderCadastro from "../../components/HeaderCadastro";
import Input from "../../components/InputCadastro";
import { FormContainer } from "../CadastroColaborador/styles";
import { ContainerCadastro } from "./styles";
import { signIn } from "../../services/security";
import { useState } from "react";
import { api } from "../../services/api";
import { useHistory } from "react-router";
import NomesColaboradores from "../../components/NomesColaborador";

function Cadastrar() {

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
                    <Input label="Nome" id="nome" handler={handleInput} required />
                    <Input label="Email" id="email" handler={handleInput} required />
                    <Input label="Senha" id="senha" handler={handleInput} required />
                    <Input label="Confirme sua Senha" id="confimeSenha" handler={handleInput} required />
                    <div id="botoes">
                        <button>Confirmar</button>
                        <button id="cancelar">Cancelar</button>
                    </div>
                    <div id="botaoFinalizar">
                        <button>Finalizar</button>
                    </div>
                </FormContainer>
            </ContainerCadastro>
        </>
    );
}

export default Cadastrar;