import { ContainerCards, } from "./styles";
import editar from "../../assents/editar.png"
import lixo from "../../assents/lixo.png"

function CardCirurgia() {

    return (
        <ContainerCards>
                <div id="cardsProdutos">
                    <div class="imagens">
                        <div id="editar">
                            <img src={editar} />
                        </div>
                        <div id="lixo">
                            <img src={lixo} />
                        </div>
                    </div>

                    <div id="informacoes">
                        <h2>Castração</h2>
                        <h3>de R$1.000.00</h3>
                        <h1>por R$957.00</h1>
                        <h3 id="parcelamento">em 10x de R$95.70</h3>
                    </div>
                </div>
        </ContainerCards>

    );
}

export default CardCirurgia;