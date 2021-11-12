import styled from "styled-components";

export const Paginas = styled.header`
   width : 35vw;
   height: 60px;
   top: 0;
   margin-right: 650px;

   display: flex;
   align-items: center;
   justify-content: space-between;

    >h1{
        font-size: 20px;
        color: white;
        flex: auto;
        align-items: center;
        padding-left: 30px;
        text-decoration: none;
    }  

    >h1:hover{
        transform: scale(1.1);
        transition: .2s;
    }
`;

export const Acessos = styled.header`
   width: 300px;
   top: 0;
   margin-right: 25px;
   display: flex;
   align-items: center;
   justify-content: space-between;

   >h2{
       height: inherit;
        font-size: 18px;
        color: white;
        flex: auto;
        align-items: center;
        padding-left: 30px;
    }

    >h2:hover{
        transform: scale(1.1);
        transition: .2s;
    }
   
    >h3{
        font-size: 18px;
        color: black;
        flex: auto;
        align-items: center;
        padding-left: 30px;
    } 
`;