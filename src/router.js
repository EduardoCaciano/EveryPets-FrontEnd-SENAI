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
import CadastroFinalizado from "./pages/CadastroFinalizado";


function Router() {

    return (
        <>
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Login />
                </Route>
                
                <Route exact path="/Catalogo">
                    <CatalogoProdutos />
                </Route>
                
                <Route exact path="/CadastroP">
                    <CadastroProduto />
                </Route>

                <Route exact path="/Cadastrar">
                    <Cadastrar />
                </Route>
                
                <Route exact path="/CadastroS">
                    <CadastroServico />
                </Route>

                <Route exact path="/Solicitacoes">
                    <Solicitacoes />
                </Route>
                
                <Route exact path="/Agendados">
                    <Agendados />
                </Route>
                
                <Route exact path="/Footer">
                    <Footer />
                </Route>
                
                <Route exact path="/ConfColaborador">
                    <ConfColaborador />
                </Route>
                
                <Route exact path="/CadastroColaborador">
                    <CadastroColaborador />
                </Route>
                
                <Route exact path="/CadastroFinalizado">
                    <CadastroFinalizado />
                </Route>


            </Switch>
        </BrowserRouter>
        </>
    );
}

export default Router;