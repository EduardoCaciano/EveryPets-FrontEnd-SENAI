import CardAtendimento from "../../components/CardAtendimento";
import HeaderHome from "../../components/HeaderHome";
import { ContainerSolicitacoes } from "./styles";


function Cadastrar() {

    return (
        <>
            <HeaderHome />
            <ContainerSolicitacoes>
                <h1>Atendimentos hoje</h1>
                <h3>14/10/2021</h3>

                <div id="containerCachorro">
                </div>

                <nav>
                    <CardAtendimento />
                    <CardAtendimento />

                </nav>

                <h1>Atendimentos Amanhã</h1>
                <h3>15/10/2021</h3>

                <div id="containerGatinho">
                </div>

                <nav>
                    <CardAtendimento />
                    <CardAtendimento />
                </nav>

                
            </ContainerSolicitacoes>
        </>
    );
}

export default Cadastrar;