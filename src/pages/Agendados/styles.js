import styled from "styled-components";
import cachorro from "../../assents/cachorro.png"
import gatinho from "../../assents/gatoCadastro.png"

export const ContainerAgendados = styled.header`
    width: 100%;
    height: initial;
    align-items: center;
    display: grid;
    justify-content: center;
    margin-top: 240px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 40px;
    *{
        font-weight: lighter;
    }

        >h1{
            font-family: sans-serif,Arial;
            text-align: center;
            text-decoration: underline;
            width: initial;
            height: initial;
            color: black;
            font-weight: bold;
            margin-top: 85px;
        }

        >h3{
            font-family: sans-serif,Arial;
            text-align: center;
            width: initial;
            height: initial;
            color: black;
            font-weight: lighter;
        }

        #containerCachorro{
            width: 900px;
            height: 160px;
            display: block;
            background-image: url(${cachorro});
            background-repeat: no-repeat;
            background-size: contain;
            background-position: center;
            margin-right: 280px;
        }

        #containerGatinho{
            width: 900px;
            height: 160px;
            display: block;
            background-image: url(${gatinho});
            background-repeat: no-repeat;
            background-size: contain;
            background-position: center;
            margin-bottom: -23px;
            margin-left: 500px;
        }

        >nav{
            margin-top: -20px;
            height: initial;
            width: 100%;
            display: grid;
            justify-content: center;
            background-color: var(--secundary);
            margin-left: auto;
            margin-right: auto;
            border-radius: 25px;
            box-shadow: 3px 8px 10px 10px rgba(0, 0, 0, 0.25);
        }
`;
