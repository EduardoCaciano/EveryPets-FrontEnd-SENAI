import HeaderCadastro from "../../components/HeaderCadastro";
import HeaderHome from "../../components/HeaderHome";
import Input from "../../components/InputCadastro";
import { FormContainer } from "../CadastroProduto/styles";
import { ContainerCadastro } from "./styles";
import { signIn } from "../../services/security";
import { useState } from "react";
import { api } from "../../services/api";
import { useHistory } from "react-router";
import logo from "../../assents/gatoCadastro.png"

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
            <HeaderHome />
            <ContainerCadastro>
                <h1>Cadastro</h1>
                
                <div id="containerGatinho">
                    <img src={logo} />
                </div>

                <FormContainer onSubmit={handleSubmit}>
                    <Input label="Tipo de Serviços" id="servico" handler={handleInput} required />
                    <Input label="Nome do Produto" id="produto" handler={handleInput} required />
                    <Input label="Tamanho" id="tamanho" handler={handleInput} required />
                    <Input label="Quantidade" id="quantidade" handler={handleInput} required />
                    <Input label="Valor" id="valor" handler={handleInput} required />
                    <Input label="Cor" id="cor" handler={handleInput} required />
                    <Input label="Descrição" id="descricao" handler={handleInput} required />
                    
                    <div id="arquivos">
                        <div id="caixaImagem">
                            <Input label="Imagem" id="imagem" type="file" handler={handleInput} required />
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