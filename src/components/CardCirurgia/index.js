import { ContainerCards, } from "./styles";
import editar from "../../assents/editar.png"
import lixo from "../../assents/lixo.png"
import  axios from 'axios';
import React,{useEffect, useState} from "react";

function CardCirurgia() {

    const [service, setService] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/services')
        .then(res => {
            setService(res.data);
        })
        .catch(err => {
            console.log("Deu merda yoda");
        })
    }, [])


    return (
        <ContainerCards>
            {service.map((service, key) => {
                return (
                <div id="cardsProdutos" key={key}>
                    <div class="imagens">
                        <div id="editar">
                            <img src={editar} />
                        </div>
                        <div id="lixo">
                            <img src={lixo} />
                        </div>
                    </div>

                    <div id="informacoes">
                        <h2>{service.name}</h2>
                        <h3>{service.amount}</h3>
                        <h1>{service.value}</h1>
                        <h3 id="parcelamento">em 10x de R$95.70</h3>
                    </div>
                </div>
                )
            })}
        </ContainerCards>

    );
}

export default CardCirurgia;