import Footer from "../../components/Footer";
import HeaderCadastro from "../../components/HeaderCadastro";
import { ContainerPrimary } from "./styles";
import { Link } from "react-router-dom";

function Cadastrar() {
  return (
    <>
      <HeaderCadastro />
      <ContainerPrimary>
        <div id="containerTitulo" />

        <main>
          <Link to="/Cadastrar">
            <div id="petshop">
              <div id="titulo">
                <h1>Sou petshop</h1>
              </div>

              <div id="imagem" />
            </div>
          </Link>

          <div id="fantasma"></div>

          <Link to="/Cadastrar">
            <div id="veterinario">
              <div id="titulo">
                <h1>Sou veterinárioª</h1>
              </div>

              <div id="imagem" />
            </div>
          </Link>
        </main>
      </ContainerPrimary>
      <Footer />
    </>
  );
}

export default Cadastrar;
