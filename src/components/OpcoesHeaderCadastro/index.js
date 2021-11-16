import { Acessos, Opcoes, Paginas } from "./styles";
import { Link } from "react-router-dom";

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
                
            </Acessos>
            
        </>
    );
}

export default OpcoesHeader;