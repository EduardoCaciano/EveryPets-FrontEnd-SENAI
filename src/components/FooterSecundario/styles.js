import styled from "styled-components";
import rodape from "../../assents/rodape.png";

export const ContainerFooterS = styled.footer`
  width: 100%;
  height: initial;
  display: flex;
  justify-content: right;
  align-items: center;
  background-image: url(${rodape});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  color: #fff;
  font-size: 1em;
  padding: 10px;

  ul, li, body, article, h1, h3, a {
    text-decoration: none;
    font-family: Arial, Helvetica, sans-serif;
    list-style-type: none;
    margin: 0;
    padding: 0;
    font-size: 1.1em;
    box-sizing: border-box;
}

ul{
    width: 30%;
    height: initial;
    display: flex;
    justify-content: space-between;
    margin-left: auto;
    margin-right: auto;
    padding: 10px;
}

li{
    text-align: center;
    width: 20%;
    border-bottom: 2px solid white;
}


.opcoes{
    height: initial;

}


a{
    width: 100%;
    color: white;
}

footer{
    height: initial;
    display: grid;
    justify-content: center;
    width: 100vw;
}

article{
    width: 100vw;
    height: initial;
    padding-left: 20px;
    justify-content: space-evenly;
    display: flex;
    float: left;
    margin-top: 30px;
}

#faleConosco{
    min-width: 1%;
    height: initial;
    float: left;
    margin-top: -30px;
    padding-left: 50px;
}

article h1{
    font-size: 25px;
    color: white; 
}

article h3{
    font-size: 18px;
    padding-top: 5px;
    color: white;
    font-weight: lighter; 
}

#redesSociais{
    width: 80%;
    justify-content: center;
    display: grid;
    height: initial;
    margin-left: auto;
    margin-right: auto;
    padding-right: 300px;
}

#redesSociais h2{
    height: initial;
    width: 40vw;
    text-align: center;
    color: white;
    font-weight: lighter;
    font-family: Arial, Helvetica, sans-serif;
    border-bottom: 2px solid white;
}

#caixaImagens{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
}

#caixaImagens .imagens{
    height: 40px;
    width: 50px;
    margin: 10px;
    border-radius: 10px;
}

img{
    width: 100%;
    height: 100%;
    border-radius: 10px;
    :hover {
        transform: scale(1.1);
        cursor: pointer;
      }
}
`;
