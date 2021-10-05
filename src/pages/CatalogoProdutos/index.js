import HeaderHome from "../../components/HeaderHome";
import { signIn } from "../../services/security";
import { useState } from "react";
import { api } from "../../services/api";
import { useHistory } from "react-router";
import { ContainerCatalogo } from "./styles";
import logo from "../../assents/profile.jpg"
import mais from "../../assents/mais.png"

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
                <div id="h1Servicos">
                    <h1>Serviços</h1>
                </div>    
                <div id="h1Adicionar">
                    <h3>Adicionar</h3>
                    <img src={mais} />
                </div>    
            </div>

                <div id="caixaCards">
                    <div class="cards">
                        <div class="imagens"></div>
                        <div class="nomeCard">
                            <h2>Consultas</h2>
                        </div>
                    </div>
                    <div class="cards">
                        <div class="imagens"></div>
                        <div class="nomeCard">
                                <h2>Cirurgias</h2>
                        </div>
                    </div>
                    <div class="cards">
                        <div class="imagens"></div>
                        <div class="nomeCard">
                            <h2>Banho e Tosa</h2>
                        </div>
                    </div>
                </div>
            </ContainerCatalogo>
        </>
    );
}

export default CatalogoProdutos;