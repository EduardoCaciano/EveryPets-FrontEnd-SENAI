import { BrowserRouter, Switch, Route } from "react-router-dom";
import HeaderLogin from "../src/components/Header";
import Header from "../src/components/Header"
import HeaderCadastro from "./components/HeaderCadastro";
import HeaderHome from "./components/HeaderHome"
import Cadastrar from "./pages/Cadastrar";
import CadastroProduto from "./pages/CadastroProduto";
import CatalogoProdutos from "./pages/CatalogoProdutos";
import Login from "./pages/Login";


function Router() {

    return (
        <>
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <CatalogoProdutos />
                </Route>
            </Switch>
        </BrowserRouter>
        </>
    );
}

export default Router;