import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import HeaderCadastro from "../../components/HeaderCadastro";
import { ContainerPrimary } from "./styles";


function Cadastrar() {
    return (
        <>
            <HeaderCadastro />
            <ContainerPrimary>
                <main>
                    <header>
                        <h1>Cadastro Finalizado!</h1>
                    </header>

                    <div id="texto">
                        <h3>O cadastro do seu estabelecimento já está feito!<br/>
                            Deseja cadastrar um colaborador para ter acesso
                            à plataforma?</h3>
                    </div>

                    <div id="botoes">
                    <Link to="/CadastroColaborador"><button>Sim</button></Link>
                        <Link to="/Catalogo"><button id="nao">Não</button></Link>
                        
                    </div>
                </main>

            </ContainerPrimary>
            <Footer />
        </>
    );
}

export default Cadastrar;