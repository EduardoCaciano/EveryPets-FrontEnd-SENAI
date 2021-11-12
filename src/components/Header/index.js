import { Container, IconSignOut } from "./styles";
import logo from "../../assents/logo2.png"
import OpcoesHeader from "../OpcoesHeader";


function HeaderLogin() {

    return (
        <Container>
            <img src={logo} />
            <OpcoesHeader/>
        </Container>
    );
}

export default HeaderLogin;