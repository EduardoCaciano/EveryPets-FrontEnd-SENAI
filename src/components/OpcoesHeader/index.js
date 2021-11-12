import { Link } from "react-router-dom";
import { Acessos, Opcoes, Paginas } from "./styles";

function OpcoesHeader() {

    return (
        <>
            <Paginas>
                <Link to="/"><h1>HOME</h1></Link>
                <Link to="/"><h1>SOBRE NÓS</h1></Link>
                <Link to="/"><h1>SERVIÇOS</h1></Link>
                <Link to="/"><h1>CONTATOS</h1></Link>
            </Paginas>

            <Acessos>
                <Link to="/Login"><h2>Login</h2></Link>
                <h3>ou</h3>
                <Link to="/EscolhaSegmento"><h2>Cadastre-se</h2></Link>
            </Acessos >

        </>
    );
}

export default OpcoesHeader;