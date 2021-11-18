import HeaderCadastro from "../../components/HeaderCadastro";
import Input from "../../components/InputCadastro";
import { FormContainer } from "../Cadastrar/styles";
import { ContainerCadastro } from "./styles";
import { signIn } from "../../services/security";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useHistory } from "react-router";
import { getEndereco } from "../../services/viaCepApi";


function Cadastrar() {
  const history = useHistory();

  // handle input genérico

  const [estabelecimento, setEstabelecimento] = useState({
    establishment: {
      name_establishment: "",
      responsible_name: "",
      cnpj: "",
      password: "",
      confirm_password: "",
      email: "",
      ddd: "",
      telephone: "",
      type_establishment: "",
    },
    address: {
      name_address: "", //Rua
      number: "",
      cep: "",
      district: "", //Bairro
      complement: "",
      city: "",
      initials_state: "",
      state: "" //UF
    },
  });

  const handleInputEstabelecimento = (e) => {
    setEstabelecimento({
      ...estabelecimento,
      establishment: {
        ...estabelecimento.establishment,
        [e.target.id]: e.target.value,
      },
    });
  };

  const handleInputEstabelecimentoAddress = (e) => {
    setEstabelecimento({
      ...estabelecimento,
      address: {
        ...estabelecimento.address,
        [e.target.id]: e.target.value,
      },
    });
  };

  useEffect(() => {
    const setEndereco = async () => {
      const endereco = await getEndereco(estabelecimento.address.cep);
      console.log(endereco);
      setEstabelecimento({
        establishment: {
          name_establishment: estabelecimento.establishment.name_establishment,
          responsible_name: estabelecimento.establishment.responsible_name,
          cnpj: estabelecimento.establishment.cnpj,
          password: estabelecimento.establishment.password,
          confirm_password: estabelecimento.establishment.confirm_password,
          email: estabelecimento.establishment.email,
          ddd: estabelecimento.establishment.ddd,
          telephone: estabelecimento.establishment.telephone,
          type_establishment: estabelecimento.establishment.type_establishment,
        },
        address: {
          name_address: endereco.logradouro, //Rua
          number: estabelecimento.address.number,
          cep: estabelecimento.address.cep,
          district: endereco.bairro, //Bairro
          complement: estabelecimento.address.complement,
          city: endereco.localidade,
          initials_state: endereco.uf,
          state: endereco.estado //UF
        },
      });
    };

    if (estabelecimento.address.cep.length === 9) setEndereco();
  }, [estabelecimento.address.cep]);

  

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const {
        establishment: {
            name_establishment,
            responsible_name,
            cnpj,
            password,
            confirm_password,
            email,
            ddd,
            telephone,
            type_establishment
        },
        address:{
            name_address,
            number,
            cep,
            district,
            complement,
            city,
            state,
            initials_state
        }
      } = estabelecimento;

      if (
        !estabelecimento.establishment.name_establishment ||
        !estabelecimento.establishment.responsible_name ||
        !estabelecimento.establishment.cnpj ||
        !estabelecimento.establishment.password ||
        !estabelecimento.establishment.confirm_password ||
        !estabelecimento.establishment.email ||
        !estabelecimento.establishment.ddd ||
        !estabelecimento.establishment.telephone ||
        !estabelecimento.establishment.type_establishment ||
        !estabelecimento.address.name_address ||
        !estabelecimento.address.number ||
        !estabelecimento.address.cep ||
        !estabelecimento.address.district ||
        !estabelecimento.address.initials_state   
        ) {
          return alert("alguns campos obrigatórios não preenchidos");
        }

        if (!estabelecimento.establishment.telephone) {
            return alert("Você precisa informar seu telefone")
        }

        const  response = await api.post("/establishment", estabelecimento)

        signIn(response.data);

        history.push("/confColaborador");

        // if (response.status === 200) {
        //     signIn(response.data.establishment.id, response.data.establishment.type_establishment);
        //     history.push("/");
        // }

        // console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  console.log(estabelecimento);

  return (
    <>
      <HeaderCadastro />
      <ContainerCadastro>
        <h1>Cadastro</h1>
        <FormContainer onSubmit={handleSubmit}>
          <Input
            label="Nome do Estabelecimento"
            id="name_establishment"
            value={estabelecimento.establishment.name_establishment}
            handler={handleInputEstabelecimento}
            required
          />
          <Input
            label="CNPJ"
            id="cnpj"
            value={estabelecimento.establishment.cnpj}
            handler={handleInputEstabelecimento}
            required
          />
          <Input
            label="Tipo do Estabelecimento"
            id="type_establishment"
            value={estabelecimento.establishment.type_establishment}
            handler={handleInputEstabelecimento}
            required
          />
          <div id="containerTelefone">
            <div id="caixaDdd">
              <Input
                label="DDD"
                id="ddd"
                value={estabelecimento.establishment.ddd}
                handler={handleInputEstabelecimento}
                required
              />
            </div>
            <div id="caixaTelefone">
              <Input
                label="Telefone"
                id="telephone"
                value={estabelecimento.establishment.telephone}
                handler={handleInputEstabelecimento}
                
                required
              />
            </div>
          </div>

          <div id="containerCepRua">
            <div id="caixaCep">
              <Input
                label="CEP"
                id="cep"
                value={estabelecimento.address.cep}
                handler={handleInputEstabelecimentoAddress}
                required
              />
            </div>
            <div id="caixaRua">
              <Input
                label="Rua"
                id="name_address"
                value={estabelecimento.address.name_address}
                handler={handleInputEstabelecimentoAddress}
                required
              />
            </div>
          </div>

          <div id="containerNComplemento">
            <div id="caixaNumero">
              <Input
                label="N°"
                id="number"
                value={estabelecimento.address.number}
                handler={handleInputEstabelecimentoAddress}
                required
              />
            </div>
            <div id="caixaComplemento">
              <Input
                label="Complemento"
                id="complement"
                value={estabelecimento.address.complement}
                handler={handleInputEstabelecimentoAddress}
              />
            </div>
            <div id="caixaComplemento">
              <Input
                label="Estado"
                id="state"
                value={estabelecimento.address.state}
                handler={handleInputEstabelecimentoAddress}
              />
            </div>
            <div id="caixaUf">
              <Input
                label="UF"
                id="initials_state"
                value={estabelecimento.address.initials_state}
                handler={handleInputEstabelecimentoAddress}
                required
              />
            </div>
          </div>

          <Input
            label="Cidade"
            id="city"
            value={estabelecimento.address.city}
            handler={handleInputEstabelecimentoAddress}
            required
          />
          <Input
            label="Bairro"
            id="district"
            value={estabelecimento.address.district}
            handler={handleInputEstabelecimentoAddress}
            required
          />
          <Input
            label="Nome do Responsavel"
            id="responsible_name"
            handler={handleInputEstabelecimento}
            value={estabelecimento.establishment.responsible_name}
            required
          />
          <Input
            label="Email"
            id="email"
            value={estabelecimento.establishment.email}
            handler={handleInputEstabelecimento}
            required
          />
          <Input
            label="Senha"
            id="password"
            value={estabelecimento.establishment.password}
            handler={handleInputEstabelecimento}
            required
          />
          <Input
            label="Confirme sua Senha"
            id="confirm_password"
            value={estabelecimento.establishment.confirm_password}
            handler={handleInputEstabelecimento}
            required
          />
          <div id="botoes">
            <button>Confirmar</button>
            <button id="cancelar" onClick={() => history.push("/")}>
              Cancelar
            </button>
          </div>
        </FormContainer>
      </ContainerCadastro>
    </>
  );
}

export default Cadastrar;
