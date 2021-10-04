import { Acessos, Opcoes, Paginas } from "./styles";

function OpcoesHeader() {

    return (
        <>
            <Paginas>
                <h1>HOME</h1>
                <h1>SOBRE NÓS</h1>
                <h1>SERVIÇOS</h1>
                <h1>CONTATOS</h1>
            </Paginas>

            <Acessos>
                <h2>Login</h2>
                <h3>ou</h3>
                <h2>Cadastre-se</h2>
            </Acessos>
            
        </>
    );
}

export default OpcoesHeader;