import CardAgendamento from "../../components/CardAgendamentos";
import Footer from "../../components/Footer";
import FooterSecundario from "../../components/FooterSecundario";
import HeaderHome from "../../components/HeaderHome";
import { ContainerAgendados } from "./styles";

function Cadastrar() {
  return (
    <>
      <HeaderHome />
      <ContainerAgendados>
        <h1>Atendimentos hoje</h1>
        <h3>14/10/2021</h3>

        <div id="containerCachorro"></div>

        <nav>
          <CardAgendamento />
          <CardAgendamento />
        </nav>

        <h1>Atendimentos Amanhã</h1>
        <h3>15/10/2021</h3>

        <div id="containerGatinho"></div>

        <nav>
          <CardAgendamento />
          <CardAgendamento />
        </nav>
      </ContainerAgendados>
      <FooterSecundario />
    </>
  );
}

export default Cadastrar;
