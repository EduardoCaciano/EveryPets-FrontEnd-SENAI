import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Redirect } from "react-router";
import Header from "../src/components/Header";
import FooterSecundario from "./components/FooterSecundario"
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
import { getUser, isSignedIn } from "./services/security";




function PrivateRoute({ role, children, ...rest }) {

    if (!isSignedIn()) {
        return <Redirect to="/" />
    }
    else{
        return <Route {...rest}>{children} </Route>;
    }
}


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
                
                <PrivateRoute path="/catalogo_produtos">
                    <CatalogoProdutos />
                </PrivateRoute>
                
                <PrivateRoute path="/cadastro_produto">
                    <CadastroProduto />
                </PrivateRoute>

                <Route path="/cadastre-se">
                    <Cadastrar />
                </Route>
                
                <PrivateRoute path="/cadastro_servico">
                    <CadastroServico />
                </PrivateRoute>

                <PrivateRoute path="/solicitacoes">
                    <Solicitacoes />
                </PrivateRoute>
                
                <PrivateRoute path="/agendados">
                    <Agendados />
                </PrivateRoute>
                
                <PrivateRoute path="/confColaborador">
                    <ConfColaborador />
                </PrivateRoute>
                
                <PrivateRoute path="/cadastro_colaborador">
                    <CadastroColaborador />
                </PrivateRoute>

                <Route path="/escolhaSegmento">
                    <EscolhaSegmento />
                </Route>

            </Switch>
        </BrowserRouter>

        </>
    );
}

export default Router;