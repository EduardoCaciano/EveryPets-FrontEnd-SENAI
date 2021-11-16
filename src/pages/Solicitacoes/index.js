import CardAtendimento from "../../components/CardAtendimento";
import Footer from "../../components/Footer";
import HeaderCadastro from "../../components/HeaderCadastro";
import HeaderHome from "../../components/HeaderHome";
import Input from "../../components/InputSolicitacoes";
import { ContainerSolicitacoes } from "./styles";


function Cadastrar() {

    return (
        <>
            <HeaderHome />
            <ContainerSolicitacoes>
                <h1>Solicitações de atendimentos</h1>

                <nav>
                    <CardAtendimento />
                    <CardAtendimento />
                    <CardAtendimento />
                    <CardAtendimento />
                    <CardAtendimento />
                    <CardAtendimento />
                    <CardAtendimento />
                    <CardAtendimento />
                    <CardAtendimento />
                    <CardAtendimento />
                    <CardAtendimento />
                    <CardAtendimento />
                </nav>
            </ContainerSolicitacoes>
            <Footer />
        </>
    );
}

export default Cadastrar;