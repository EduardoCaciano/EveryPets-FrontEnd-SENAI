import HeaderCadastro from "../../components/HeaderCadastro";
import Input from "../../components/InputCadastro";
import { FormContainer } from "../Cadastrar/styles";
import { ContainerCadastro } from "./styles";
import { signIn } from "../../services/security";
import { useState } from "react";
import { api } from "../../services/api";
import { useHistory } from "react-router";

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
                <h1>Cadastro</h1>
                <FormContainer onSubmit={handleSubmit}>
                    <Input label="Nome do Estabelecimento" id="estabelecimento" handler={handleInput} required />
                    <Input label="CNPJ" id="cnpj" handler={handleInput} required />
                    <Input label="Tipo do Estabelecimento" id="tipoEstabelecimento" handler={handleInput} required />
                    <div id="containerTelefone">
                        <div id="caixaDdd">
                            <Input label="DDD" id="ddd" handler={handleInput} required />
                        </div>
                        <div id="caixaTelefone">
                        <Input label="Telefone" id="telefone" handler={handleInput} required />
                        </div>
                    </div>
                    
                    <div id="containerCepRua">
                        <div id="caixaCep">
                            <Input label="CEP" id="cep" handler={handleInput} required />
                        </div>
                        <div id="caixaRua">
                            <Input label="Rua" id="rua" handler={handleInput} required />
                        </div>
                    </div>
                    
                    <div id="containerNComplemento">
                        <div id="caixaNumero">
                        <Input label="N°" id="numeroCasa" handler={handleInput} required />
                        </div>
                        <div id="caixaComplemento">
                        <Input label="Complemento" id="complemento" handler={handleInput} required />
                        </div>
                        <div id="caixaUf">
                        <Input label="UF" id="uf" handler={handleInput} required />
                        </div>
                    </div>
                    
                    <Input label="Cidade" id="cidade" handler={handleInput} required />
                    <Input label="Bairro" id="bairro" handler={handleInput} required />
                    <Input label="Nome do Responsavel" id="nomeResponsavel" handler={handleInput} required />
                    <Input label="Email" id="email" handler={handleInput} required />
                    <Input label="Senha" id="senha" handler={handleInput} required />
                    <Input label="Confirme sua Senha" id="confimeSenha" handler={handleInput} required />
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