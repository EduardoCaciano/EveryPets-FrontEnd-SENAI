import HeaderCadastro from "../../components/HeaderCadastro";
import HeaderHome from "../../components/HeaderHome";
import Input from "../../components/InputCadastro";
import { ContainerSolicitacoes } from "./styles";
import editar from "../../assents/editar.png"


function Cadastrar() {

    return (
        <>
            <HeaderHome />
            <ContainerSolicitacoes>
                <h1>Solicitações de atendimentos</h1>

                <nav>
                    <div id="cardAtendimento">
                        <div id="header">
                            <div id="dadosHorario">
                                <div id="dadosUsuario">
                                    <h3>Nome: Eduardo da Silva Caciano</h3>
                                    <h3>Telefone: (11) 98696-4639</h3>
                                    <h3>E-mail: eduardocaciano15@hotmail.com</h3>
                                </div>

                                <div id="horario">
                                    <h3>Horario requerido:</h3>
                                    <h3>13/10/2021 às 09:14</h3>
                                </div>
                            </div>

                            {/* linha */}

                            <div id="dadosAnimalHeader">
                                <h3>Animal: cachorro</h3>
                                <h3>Enfermidade: tartaro</h3>
                            </div>
                        </div>

                        <div id="footer">
                            <div id="imagem">
                                <img src={editar} />
                            </div>

                            <div id="dadosAnimalFooter">
                                <h3>Gravidade: leve</h3>
                                <h3>Idade do animal: 4</h3>
                                <h3>Porte do animal: pequeno</h3>
                                <h3>Descrição: Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h3>
                            </div>

                            <div id="campoConfirmacao">
                                <h3>Definir a duração do atendimento</h3>
                                <Input label="Digitar" id="valor" />
                            </div>
                        </div>
                    </div>
                </nav>

                
            </ContainerSolicitacoes>
        </>
    );
}

export default Cadastrar;