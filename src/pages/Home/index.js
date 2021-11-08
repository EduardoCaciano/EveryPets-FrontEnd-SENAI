import { Container } from "./styles";
import Header from "../../components/Header";
import rato from "../../assents/rato.png";
import dog from "../../assents/dog.png";
import passaro from "../../assents/passaro.png";
import gato from "../../assents/gato.png";
import coelho from "../../assents/coelho.png";


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
                    <div id="imagemSobreNos"/>
                    
                    <div id="tituloSobreNos">
                        <h1><font color="#FF8A00">CUIDADO E CARINHO COM SEU PET</font></h1>
                        <h1>SOMOS ESPECIALIZADOS EM BONS TRATOS</h1>
                    </div>
                </section>

            </Container>

        </>
    );
}

export default Home;