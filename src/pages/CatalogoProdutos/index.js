import HeaderHome from "../../components/HeaderHome";
import { signIn } from "../../services/security";
import { useState } from "react";
import { api } from "../../services/api";
import { useHistory } from "react-router";
import { ContainerCatalogo } from "./styles";
import logo from "../../assents/profile.jpg"

function CatalogoProdutos() {

    return (
        <>
            <HeaderHome />
            <ContainerCatalogo>
                <div id="CaixaFotoNome">
                <div id="foto">
                    <img src={logo} />
                    <h3>Trocar Foto</h3>
                </div>
                    <div>
                        <h1>Nome da Empresa</h1>
                        <h3>Nome da Empresa</h3>
                    </div>    
                </div>
            </ContainerCatalogo>
        </>
    );
}

export default CatalogoProdutos;