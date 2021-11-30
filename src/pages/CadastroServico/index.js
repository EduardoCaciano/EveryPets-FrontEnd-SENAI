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
import Footer from "../../components/Footer";

function Cadastrar() {

    const history = useHistory();

    const [servico, setServico] = useState({
        name: "",
        value: "",
        description: "",
        image: "",
        id: ""
    });

    // handle input genérico
    const handleInputServico = (event) => {
        setServico({ 
            ...servico,
            [event.target.id]: event.target.value 
        });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const {name, value, description} = servico;

            if (name === "" || value === "" || description === "") {
                alert("Preencha todos os campos");
                return;
              }

            const response = await api.post("/service", servico);

            signIn(response.data.token)
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <>
            <HeaderHome />
            <ContainerCadastro>
                <h1>Cadastre seus serviços</h1>
                
                <div id="containerGatinho">
                    <img src={logo} />
                </div>

                <FormContainer onSubmit={handleSubmit}>
                    <Input label="Tipo de Serviços" id="name"  handler={handleInputServico} value={servico.name} required />
                    <Input label="Valor" id="value" handler={handleInputServico} value={servico.value}required />
                    <Input label="Descrição" id="description" handler={handleInputServico} value={servico.description}required />
                    <div id="arquivos">
                        <div id="caixaImagem">
                            <Input label="Imagem" id="image" type="file" handler={handleInputServico} value={servico.image} />
                        </div>
                        <button>Upload</button>
                    </div>

                    <div id="botoes">
                        <button>Confirmar</button>
                        <button id="cancelar">Cancelar</button>
                    </div>
                </FormContainer>
            </ContainerCadastro>
            <Footer />
        </>
    );
}

export default Cadastrar;