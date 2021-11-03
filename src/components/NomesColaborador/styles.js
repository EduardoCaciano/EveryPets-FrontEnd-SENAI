import styled from "styled-components";
import imgDog from "../../assents/catalogo.png";

export const ContainerCards = styled.header`

        >#cardColaborador{
            width: 100px;
            height: initial;
            margin-left: 10px;
            border: 1px solid black;
            text-align: center;
            margin-top: 5px;
            border-radius: 5px;
                
                :hover{
                    box-shadow: 0px 10px 10px rgba(0,0,0, 0.25);
                    transform: scale(1.1); 
                    cursor: pointer;
                    background-color: black;
                    color: var(--primary);
                }
        }
`;

