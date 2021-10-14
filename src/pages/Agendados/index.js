import CardAtendimento from "../../components/CardAtendimento";
import HeaderHome from "../../components/HeaderHome";
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
        </>
    );
}

export default Cadastrar;