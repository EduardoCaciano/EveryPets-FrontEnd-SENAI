import { Cards } from "./styles";
import editar from "../../assents/editar.png"
import lixo from "../../assents/lixo.png"
import Input from "../InputSolicitacoes";

function CardAtendimento() {

    return (
        <Cards>
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

                            <div id="linha"></div>

                            <div id="dadosAnimalHeader">
                                <h3>Animal: cachorro</h3>
                                <h3>Enfermidade: tartaro</h3>
                            </div>
                        </div>

                        <div id="footer">
                            <div id="imagem" />


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
                                <div id="botoes">
                                    <button>Confirmar</button>
                                    <button id="cancelar">Cancelar</button>
                                </div>
                            </div>
                        </div>
                    </div>
        </Cards>

    );
}

export default CardAtendimento;