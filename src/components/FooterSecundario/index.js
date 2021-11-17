import { ContainerFooterS } from "./styles";
import facebook from "../../assents/facebook.jpg";
import insta from "../../assents/insta.png";
import twitter from "../../assents/twitter.png";
import Footer from "../Footer";

function FooterSecundario() {
  return (
    <>
    <ContainerFooterS>
      <footer>
        <ul>
          <li class="opcoes">
            <a href="/">Inicio</a>
          </li>
          <li class="opcoes">
            <a href="/">Sobre</a>
          </li>
          <li class="opcoes">
            <a href="/">Serviços</a>
          </li>
        </ul>

        <article>
          <div id="faleConosco">
            <h1>Fale Conosco</h1>
            <h3>Email: everypets@hotmail.com</h3>
            <h3>Comercial: (11) 98696-4639</h3>
            <h3>Whatsapp: (11) 98696-4639</h3>
          </div>

          <div id="redesSociais">
            <h2>Acesse também nossas redes sociais</h2>
            <div id="caixaImagens">
              <div class="imagens">
                <img src={facebook} />
              </div>

              <div class="imagens">
                <img src={insta} />
              </div>

              <div class="imagens">
                <img src={twitter} />
              </div>
            </div>
          </div>
        </article>
      </footer>
    </ContainerFooterS>
    <Footer />
    </>
  );
}

export default FooterSecundario;
