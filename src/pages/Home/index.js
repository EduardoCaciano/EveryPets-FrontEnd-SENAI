import { Container } from "./styles";
import Header from "../../components/Header";
import logo from "../../assents/profile.jpg"

function Home() {
    return (
        <>
            <Header />
            <Container>
                <main>
                    <div>
                        <h1>Empresa <font color="#FF8A00">Revolucionária</font></h1>
                        <h1>No mercado de <font color="#FF8A00">Pets</font></h1>
                    </div>
                </main>

                <section>
                    <div id="imagemSobreNos" />

                    <div id="tituloSobreNos">
                        <h1><font color="#FF8A00">CUIDADO E CARINHO COM SEU PET</font></h1>
                        <h1>SOMOS ESPECIALIZADOS EM BONS TRATOS</h1>
                    </div>
                </section>

                <body>
                    <div id="mercado">
                        <h2>Revelação no Mercado</h2>
                        <p>A EveryPets é uma startup
                            com o seu inicio em 2021.
                            
                            <br />
                            
                            Trazendo a idéia revolucinaria de criar um sistema para delivery e acesso para clinicas, com o foco nas empresas de pequeno e médio porte.</p>
                    </div>

                    <div id="missao">
                        <h2>Nossa Missão</h2>
                        <p>
                            A nossa missão é revolucionar
                            o mercado de pets e trazer mais
                            confortabilidade para o cliente e
                            para o prestador de serviço.

                            <br />

                            Deixas os serviços mais ageis,
                            acessível e fácil
                        </p>
                    </div>


                    <div id="valores">
                        <h2>Nossos Valores</h2>
                        <p>Comprometimento com  a qualidade
                            do nosso sistema e com a satisfação
                            dos clientes e colaboradores são
                            nossos maiores valores.
                        </p>
                    </div>
                </body>

                <div id="tituloServicos">
                    <h1>Serviços</h1>
                </div>

                <article>
                    <div class="cards">
                        <h3>Pet Food</h3>
                        <img src={logo} />
                    </div>

                    <div class="cards">
                        <h3>Pet Care</h3>
                        <img src={logo} />
                    </div>

                    <div class="cards">
                        <h3>Pet Vet</h3>
                        <img src={logo} />
                    </div>

                    <div class="cards">
                        <h3>Pet Serv</h3>
                        <img src={logo} />
                    </div>

                    <div class="cards">
                        <h3>Aplicativo</h3>
                        <img src={logo} />
                    </div>

                    <div class="cards">
                        <h3>Sistema Every Pets</h3>
                        <img src={logo} />
                    </div>


                </article>

            </Container>

        </>
    );
}

export default Home;