import { Container } from "./styles";
import { Link } from "react-router-dom";
import logo from "../../assents/logo2.png"
import botaoSair from "../../assents/botaoSair.png"
import profile from "../../assents/profile.jpg";


function Header() {

    return (
        <Container>
            <nav>
                <img src={logo} />
                <input type="search" placeholder="Pesquisar..." />
                <div id="profile"><img src={profile} /></div>
                <p>Diego | Veterinario</p>
            </nav>

                <div id="sair">
                <Link to="/login">
                    <img src={botaoSair} />
                </Link>
                </div>
            

            <nav id="headerCardes">
                <div class="cards">
                    <p>Home</p>
                </div>
                <div class="cards">
                    <p>Produtos</p>
                </div>
                <div class="cards">
                    <p>Cadastro</p>
                </div>
                <div class="cards">
                    <p>Atendimentos</p>
                </div>
            </nav>

            <div id="caixaInformacoesParciais">
                <nav id="InformacoesParciais">

                    <div>
                        <div class="containerCardeInformacoes">
                            <p>90</p>
                        </div>
                        <p>Atendimentos hoje</p>
                    </div>

                    <div>
                        <div class="containerCardeInformacoes">
                            <p>90</p>
                        </div>
                        <p>Atendimentos amanhã</p>
                    </div>

                    <div>
                        <div class="containerCardeInformacoes">
                            <p>90</p>
                        </div>
                        <p>Mensagens</p>
                    </div>

                    <div>
                        <div class="containerCardeInformacoes">
                            <p>90</p>
                        </div>
                        <p>Confirmações</p>
                    </div>
                </nav>
            </div>

        </Container>

    );
}

export default Header