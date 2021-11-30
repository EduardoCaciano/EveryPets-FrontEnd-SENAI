import HeaderCadastro from "../../components/HeaderCadastro";
import HeaderHome from "../../components/HeaderHome";
import Input from "../../components/InputConfiguracoes";
import { FormContainer } from "./styles";
import { Configuracoes } from "./styles";
import { signIn } from "../../services/security";
import { useState } from "react";
import { api } from "../../services/api";
import { useHistory } from "react-router";
import Footer from "../../components/Footer";
import petvet from "../../assents/profile.jpg";

function Configuracao() {
  const history = useHistory();

  const [formLogin, setFormLogin] = useState({
    email: "",
    senha: ""
  });

  // handle input genérico
  const handleInput = (e) => {
    setFormLogin({ ...formLogin, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/sessions", {
        email: formLogin.email,
        password: formLogin.senha
      });

      signIn(response.data);

      history.push("/home");
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <>
      <HeaderHome />
      <Configuracoes>
        <header>
          <div id="imagem">
            <img src={petvet} />
          </div>

          <div>
            <h1>Dr. Eduardo Caciano</h1>
            <h3>Veterinárioª</h3>
          </div>
        </header>

        <main>
          <h2>Meus Dados</h2>

          <FormContainer onSubmit={handleSubmit}>
            <Input
              label="Nome do Estabelecimento"
              id="estabelecimento"
              handler={handleInput}
              required
            />
            <Input
              label="Telefone"
              id="telefone"
              handler={handleInput}
              required
            />
            <Input label="Email" id="email" handler={handleInput} required />

            <div id="endereco">
              <div id="caixaCep">
                <Input label="CEP" id="cep" handler={handleInput} required />
              </div>
              <div id="caixaRua">
                <Input label="Rua" id="rua" handler={handleInput} required />
              </div>
              <div id="caixaNumero">
                <Input
                  label="N°"
                  id="numeroCasa"
                  handler={handleInput}
                  required
                />
              </div>
            </div>

            <div id="abaixoEndereco">
              <div id="caixaBairro">
                <Input
                  label="Bairro"
                  id="bairro"
                  handler={handleInput}
                  required
                />
              </div>
              <div id="caixaCidade">
                <Input
                  label="Cidade"
                  id="cidade"
                  handler={handleInput}
                  required
                />
              </div>

              <div id="caixaUf">
                <select id="estado" name="estado">
                  <option value="UF">Selecione sua UF</option>
                  <option value="AC">Acre</option>
                  <option value="AL">Alagoas</option>
                  <option value="AP">Amapá</option>
                  <option value="AM">Amazonas</option>
                  <option value="BA">Bahia</option>
                  <option value="CE">Ceará</option>
                  <option value="DF">Distrito Federal</option>
                  <option value="ES">Espírito Santo</option>
                  <option value="GO">Goiás</option>
                  <option value="MA">Maranhão</option>
                  <option value="MT">Mato Grosso</option>
                  <option value="MS">Mato Grosso do Sul</option>
                  <option value="MG">Minas Gerais</option>
                  <option value="PA">Pará</option>
                  <option value="PB">Paraíba</option>
                  <option value="PR">Paraná</option>
                  <option value="PE">Pernambuco</option>
                  <option value="PI">Piauí</option>
                  <option value="RJ">Rio de Janeiro</option>
                  <option value="RN">Rio Grande do Norte</option>
                  <option value="RS">Rio Grande do Sul</option>
                  <option value="RO">Rondônia</option>
                  <option value="RR">Roraima</option>
                  <option value="SC">Santa Catarina</option>
                  <option value="SP">São Paulo</option>
                  <option value="SE">Sergipe</option>
                  <option value="TO">Tocantins</option>
                  <option value="EX">Estrangeiro</option>
                </select>
              </div>
            </div>

            <Input
              label="Complemento"
              id="complemento"
              handler={handleInput}
              required
            />

            <div id="botoes">
              <button>Atualizar Dados</button>
            </div>
          </FormContainer>
        </main>
      </Configuracoes>
      <Footer />
    </>
  );
}

export default Configuracao;
