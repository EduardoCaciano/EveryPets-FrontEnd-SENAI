import { Container } from "./styles";
import Header from "../../components/Header";
import logo from "../../assents/profile.jpg";
import logoEvery from "../../assents/logoEvery.png";
import sistemPet from "../../assents/sistemPet.jpg";
import petfood from "../../assents/petFood.png";
import petcare from "../../assents/petCare.png";
import petvet from "../../assents/petVet.png";
import FooterS from "../../components/FooterSecundario";
import petserv from "../../assents/petServ.jpg";

function Home() {
  return (
    <>
      <Header />
      <Container>
        <main>
          <div>
            <h1>
              Empresa <font color="#FF8A00">Revolucionária</font>
            </h1>
            <h1>
              No mercado de <font color="#FF8A00">Pets</font>
            </h1>
          </div>
        </main>

        <section>
          <div id="imagemSobreNos" />

          <div id="tituloSobreNos">
            <h1>
              <font color="#FF8A00">CUIDADO E CARINHO COM SEU PET</font>
            </h1>
            <h1>SOMOS ESPECIALIZADOS EM BONS TRATOS</h1>
          </div>
        </section>

        <body>
          <div id="mercado">
            <h2>Revelação no Mercado</h2>
            <p>
              A EveryPets é uma startup com o seu inicio em 2021.
              <br />
              Trazendo a idéia revolucinaria de criar um sistema para delivery e
              acesso para clinicas, com o foco nas empresas de pequeno e médio
              porte.
            </p>
          </div>

          <div id="missao">
            <h2>Nossa Missão</h2>
            <p>
              A nossa missão é revolucionar o mercado de pets e trazer mais
              confortabilidade para o cliente e para o prestador de serviço.
              <br />
              Deixas os serviços mais ageis, acessível e fácil.
            </p>
          </div>

          <div id="valores">
            <h2>Nossos Valores</h2>
            <p>
              Comprometimento com a qualidade do nosso sistema e com a
              satisfação dos clientes e colaboradores são nossos maiores
              valores.
            </p>
          </div>
        </body>

        <div id="tituloServicos">
          <h1>Serviços</h1>
        </div>

        <article>
          <div class="cards">
            <div id="titulo">
              <h1>Pet Food</h1>
            </div>

            <div id="imagem">
              <img src={petfood} />
            </div>
          </div>

          <div class="cards">
            <div id="titulo">
              <h1>Pet Care</h1>
            </div>

            <div id="imagem">
              <img src={petcare} />
            </div>
          </div>

          <div class="cards">
            <div id="titulo">
              <h1>Pet Vet</h1>
            </div>

            <div id="imagem">
              <img src={petvet} />
            </div>
          </div>

          <div class="cards">
            <div id="titulo">
              <h1>Pet Serv</h1>
            </div>

            <div id="imagem">
              <img src={petserv} />
            </div>
          </div>

          <div class="cards">
            <div id="titulo">
              <h1>Aplicativo</h1>
            </div>

            <div id="imagem">
              <img src={logoEvery} />
            </div>
          </div>

          <div class="cards">
            <div id="titulo">
              <h1>Sistema EveryPets</h1>
            </div>

            <div id="imagem">
              <img src={sistemPet} />
            </div>
          </div>
        </article>



        <FooterS />
      </Container>
    </>
  );
}

export default Home;
