import HeaderCadastro from "../../components/HeaderCadastro";
import Input from "../../components/InputCadastro";
import { FormContainer } from "../Cadastrar/styles";
import { ContainerCadastro } from "./styles";
import { signIn } from "../../services/security";
import { useState } from "react";
import { api } from "../../services/api";
import { useHistory } from "react-router";
import { useForm } from "react-hook-form";
import { address } from "../../services";
import { mascaraCep } from "../../utils";
import { mascaraCnpj } from "../../utils";
import { mascaraCel } from "../../utils";

function Cadastrar() {
  const {
    register,
    formState: { errors },
  } = useForm();

  const [endereco, setEndereco] = useState({
    logradouro: "",
    bairro: "",
    localidade: "",
    uf: "",
  });

  const history = useHistory();

  const [formCadastro, setformCadastro] = useState({
    nomeEstabelecimento: "",
    cnpj: "",
    tipoEstabelecimento: "",
    ddd: "",
    telefone: "",
    cep: "",
    numeroCasa: "",
    complemento: "",
    nomeResponsavel: "",
    email: "",
    senha: "",
    confirmeSenha: "",
  });

  const handleZipCode = async (event) => {
    const zipCode = event.target.value;

    const foundedAddress = await address.findAddressByZipCode(
      event.target.value
    );

    setEndereco(foundedAddress);
  };

  const handleInput = (e) => {
    setformCadastro({ ...formCadastro, [e.target.id]: e.target.value });
  };
  
  //Mascaras
  const handleCep = (e) => {
    let cep = e.target.value;
    cep = mascaraCep(cep);
    setformCadastro({ ...formCadastro, cep: cep });
  };

  const handleCnpj = (e) => {
    let cnpj = e.target.value;
    cnpj = mascaraCnpj(cnpj);
    setformCadastro({ ...formCadastro, cnpj: cnpj });
  };
  const tes = ()=>{
    console.log(formCadastro)
  }

  const handleCel = (e) => {
    let cel = e.target.value;
    cel = mascaraCel(cel);
    setformCadastro({ ...formCadastro, telefone: cel });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const { nomeEstabelecimento, cnpj, tipoEstabelecimento, ddd, telefone, cep, numeroCasa, complemento, nomeResponsavel, email, senha, confirmeSenha} = formCadastro;
  
      const response = await api.post("/establishment", {
  
        nomeEstabelecimento, 
        cnpj, 
        tipoEstabelecimento, 
        ddd, 
        telefone, 
        cep,
        numeroCasa, 
        complemento, 
        nomeResponsavel, 
        email, 
        senha,
        confirmeSenha
      });
          signIn(response.data)
          
  
          
          history.push("/");
        } catch (error) {
          console.error(error);
          alert(error.response.data.error);
          
        }
      };


  return (
    <>
      <HeaderCadastro />
      <ContainerCadastro>
        <h1>Cadastro</h1>
        <FormContainer onSubmit={handleSubmit}>

          {/* <Input label="Nome do Estabelecimento" id="estabelecimento" value={formCadastro.nomeEstabelecimento} />  */}
          <Input label="Nome do Estabelecimento" id='nomeEstabelecimento' handler={handleInput} value={formCadastro.nomeEstabelecimento} />
          <Input label="CNPJ" id="cnpj" handler={handleCnpj} maxLength='14' required  value={formCadastro.cnpj}/>
          <Input label="Tipo do Estabelecimento" id="tipoEstabelecimento" value={formCadastro.tipoEstabelecimento} handler={handleInput}/>

          
          <div id="containerTelefone">
            <div id="caixaDdd">
              <Input label="DDD" id="ddd" handler={handleInput} required />
            </div>

            <div id="caixaTelefone">
              <Input label="Telefone" id="telefone" value={formCadastro.telefone} handler={handleCel} maxLength='15'/>
            </div>
          </div>

          <div id="containerCepRua">
            <div id="caixaCep">
              <Input label="CEP" handler={handleCep} maxLength='9' value={formCadastro.cep} onKeyPress={(event) => handleZipCode(event)} {...register("zipcode")}/>
            </div>
            <div id="caixaRua">
              <Input label="Rua" id="logradouro" handler={handleInput} {...register("logradouro")} value={endereco.logradouro}/>
            </div>
          </div>

          <div id="containerNComplemento">
            <div id="caixaNumero">
              <Input label="N°" id="numeroCasa" value={formCadastro.numeroCasa} handler={handleInput} required/>
            </div>

            <div id="caixaComplemento">
              <Input label="Complemento" id="complemento" value={formCadastro.complemento} handler={handleInput} required/>
            </div>

            <div id="caixaUf">
                <Input label="UF" id="uf" handler={handleInput} required {...register("uf")} value={endereco.uf}/>
            </div>
          </div>

          <Input label="Cidade" id="cidade" handler={handleInput} required {...register("localidade")} value={endereco.localidade}/>
          <Input
            label="Bairro"
            id="bairro"
            handler={handleInput}
            required
            {...register("bairro")}
            value={endereco.bairro}
          />
          <Input label="Nome do Responsavel" id="nomeResponsavel" value={formCadastro.nomeResponsavel}
            handler={handleInput} required/>
          
          <Input label="Email" id="email" type='email' value={formCadastro.email} handler={handleInput} required />

          <Input label="Senha" id="senha"  type="password" value={formCadastro.senha} handler={handleInput}  required />

          <Input label="Confirme sua Senha" label="Confirme sua senha" id='confirmeSenha' handler={handleInput} value={formCadastro.confirmeSenha}/>
          <div id="botoes">
            <button>Confirmar</button>
            <button id="cancelar">Cancelar</button>
          </div>
        </FormContainer>
      </ContainerCadastro>
    </>
  );
}

export default Cadastrar;
