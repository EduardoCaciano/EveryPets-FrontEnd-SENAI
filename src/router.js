import { BrowserRouter, Switch, Route } from "react-router-dom";
import HeaderLogin from "../src/components/Header";
import Header from "../src/components/Header"
import HeaderCadastro from "./components/HeaderCadastro";
import HeaderHome from "./components/HeaderHome"
import Footer from "./components/Footer"
import Cadastrar from "./pages/Cadastrar";
import CadastroProduto from "./pages/CadastroProduto";
import CadastroServico from "./pages/CadastroServico";
import CatalogoProdutos from "./pages/CatalogoProdutos";
import Solicitacoes from "./pages/Solicitacoes";
import Agendados from "./pages/Agendados";
import Login from "./pages/Login";
import ConfColaborador from "./pages/ConfirmacaoColaborador";
import CadastroColaborador from "./pages/CadastroColaborador";
import EscolhaSegmento from "./pages/EscolhaSegmentos";
import Home from "./pages/Home";


function Router() {

    return (
        <>
        <BrowserRouter>
            <Switch>

                <Route exact path="/">
                    <Home />
                </Route>

                <Route path="/login">
                    <Login />
                </Route>
                
                <Route path="/catalogo">
                    <CatalogoProdutos />
                </Route>
                
                <Route path="/cadastroP">
                    <CadastroProduto />
                </Route>

                <Route path="/cadastrar">
                    <Cadastrar />
                </Route>
                
                <Route path="/cadastroS">
                    <CadastroServico />
                </Route>

                <Route path="/solicitacoes">
                    <Solicitacoes />
                </Route>
                
                <Route path="/agendados">
                    <Agendados />
                </Route>
                
                <Route path="/footer">
                    <Footer />
                </Route>
                
                <Route path="/confColaborador">
                    <ConfColaborador />
                </Route>
                
                <Route path="/cadastroColaborador">
                    <CadastroColaborador />
                </Route>

                <Route path="/escolhaSegmento">
                    <EscolhaSegmento />
                </Route>

            </Switch>
        </BrowserRouter>
        </>
    );
}

export default Router;