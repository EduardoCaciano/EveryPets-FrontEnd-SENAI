import { Container,  } from "./styles";
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
                <img src={botaoSair} />
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
                    <p>Mensagens</p>
                </div>
            </nav>
        </Container>

    );
}

export default Header