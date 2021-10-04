import { Container, IconSignOut } from "./styles";
import logo from "../../assents/logo2.png"
import OpcoesHeaderCadastro from "../OpcoesHeaderCadastro";


function HeaderCadastro() {

    return (
        <Container>
            <img src={logo} />
            <OpcoesHeaderCadastro/>
        </Container>
    );
}

export default HeaderCadastro;