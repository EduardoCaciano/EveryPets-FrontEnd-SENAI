import HeaderHome from "../../components/HeaderHome";
import { ContainerCatalogo } from "./styles";
import logo from "../../assents/profile.jpg"
import editar from "../../assents/editar.png"
import lixo from "../../assents/lixo.png"
import mais from "../../assents/mais.png"
import consulta from "../../assents/consulta.jpg"
import cirurgia from "../../assents/cirurgia.jpg"
import banhoeTosa from "../../assents/banhoeTosa.png"
import CardCirurgia from "../../components/CardCirurgia";
import FooterS from "../../components/FooterSecundario";
import { Link } from "react-router-dom";

function CatalogoProdutos() {

    return (
        <>
            <HeaderHome />
            <ContainerCatalogo>
                <div id="caixaFotoNome">

                    <div id="foto">
                        <img src={logo} />
                        <h2 id="trocar">Trocar Foto</h2>
                    </div>
                    
                        <div>
                            <h1>EveryPets</h1>
                            <h3>PetShop</h3>
                        </div>    
                </div>
            
                <div id="servicos">
                    <h1>Serviços</h1> 
                </div>

                <div id="adicionar">
                    <h3>Adicionar</h3>
                    <Link to="/cadastro_servico"><img src={mais} /></Link>
                </div>

                <div id="cardServicos">
                    <div class="cards">
                        <div class="imagens">
                            <div class="opcoes">
                                <img src={editar} />
                            </div>
                            <div class="fotoCard">
                                <img src={consulta} />
                            </div>
                            <div class="opcoes">
                                <img src={lixo} />
                            </div>
                        </div>
                        <div class="nomeCard">
                            <h2>Consultas</h2>
                        </div>
                    </div>

                    <div class="cards">
                        <div class="imagens">
                            <div class="opcoes">
                                <img src={editar} />
                            </div>
                            <div class="fotoCard">
                                <img src={cirurgia} />
                            </div>
                            <div class="opcoes">
                                <img src={lixo} />
                            </div>
                        </div>
                        <div class="nomeCard">
                                <h2>Cirurgias</h2>
                        </div>
                    </div>

                    <div class="cards">
                        <div class="imagens">
                            <div class="opcoes">
                                <img src={editar} />
                            </div>
                            <div class="fotoCard">
                                <img src={banhoeTosa} />
                            </div>
                            <div class="opcoes">
                                <img src={lixo} />
                            </div>
                        </div>
                        <div class="nomeCard">
                            <h2>Banho e Tosa</h2>
                        </div>
                    </div>
                </div>
            
                <div id="cirurgias">
                    <h1>Cirurgias</h1>
                </div>
            
                <div id="cardsCirurgias">
                    <CardCirurgia/>
                    <CardCirurgia/>
                    <CardCirurgia/>
                    <CardCirurgia/>
                    <CardCirurgia/>
                    <CardCirurgia/>
                    <CardCirurgia/>
                    <CardCirurgia/>
                    <CardCirurgia/>
                    <CardCirurgia/>
                    <CardCirurgia/>
                    <CardCirurgia/>
                    <CardCirurgia/>
                    <CardCirurgia/>
                    <CardCirurgia/>
                    <CardCirurgia/>
                    <CardCirurgia/>
                    <CardCirurgia/>
                    <CardCirurgia/>
                    <CardCirurgia/>
                    <CardCirurgia/>
                    <CardCirurgia/>
                    <CardCirurgia/>
                    <CardCirurgia/>
                    <CardCirurgia/>
                    <CardCirurgia/>
                    <CardCirurgia/>
                    <CardCirurgia/>
                    <CardCirurgia/>
                    <CardCirurgia/>
                    <CardCirurgia/>
                    <CardCirurgia/>
                    <CardCirurgia/>
                    <CardCirurgia/>
                    <CardCirurgia/>
                    <CardCirurgia/>
                    <CardCirurgia/>
                    <CardCirurgia/>
                    <CardCirurgia/>
                    <CardCirurgia/>
                    <CardCirurgia/>
                    <CardCirurgia/>
                </div>
                <FooterS />
            </ContainerCatalogo>
        </>
    );
}

export default CatalogoProdutos;