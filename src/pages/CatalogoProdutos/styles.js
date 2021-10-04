import styled from "styled-components";


export const ContainerCatalogo = styled.div`
    width: 100vw;
    height: 80vh;
    align-items: center;
    justify-content: center;
    margin-top: 258px;

    >#CaixaFotoNome{
        height: 150px;
        width: 100vw;
        background-color: var(--primary);
        align-items: center;
        display: flex;

        >#foto{
            height: initial;
            width: 220px;
            margin-left: 50px;
            background-color: var(--primary);

            >img{
            height: 100px;
            border-radius: 100%;
            border: 1.8px solid black;
            }

            >h3{
            height: initial;
            width: inherit;
            text-align: center;
            color: black;
            font-weight: initial;
            text-align: left;
            }

            
        }

        >div{
            height: initial;
            width: 400px;
            margin-left: 550px;

            >h1{
            height: initial;
            width: inherit;
            text-align: center;
            color: white;
            text-shadow: 0.1em 0.2em 0.3em black;
            padding-right: 120px;
            }
            
            >h3{
            height: initial;
            width: inherit;
            text-align: center;
            color: white;
            text-shadow: 0.1em 0.2em 0.2em black;
            padding-right: 120px;
            font-weight: initial;
            }
        }
    }

`;


