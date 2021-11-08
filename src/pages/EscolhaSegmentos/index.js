import HeaderCadastro from "../../components/HeaderCadastro";
import { ContainerPrimary } from "./styles";

function Cadastrar() {
    return (
        <>
            <HeaderCadastro />
            <ContainerPrimary>

                <div id="containerTitulo" />

                <main>
                    <div id="petshop">
                        <div id="titulo">
                            <h1>Sou petshop</h1>
                        </div>

                        <div id="imagem"/>
                    </div>

                    <div id="fantasma"></div>

                    <div id="veterinario">
                        <div id="titulo">
                            <h1>Sou veterinárioª</h1>
                        </div>

                        <div id="imagem"/>

                    </div>



                </main>

            </ContainerPrimary>
        </>
    );
}

export default Cadastrar;