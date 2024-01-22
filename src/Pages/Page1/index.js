import React, { useState } from "react";
import "./styles.css";
import search from "../../images/busca.svg";
import Header from "../../components/header";
import api from "../../api/api";
function Page1() {
  const [showTable, setShowTable] = useState(false);
  const [valueInput, setValueInput] = useState(0);
  const [fornecedores, setFornecedores] = useState([]);

  function handleValue(e) {
    const value = e.target.value;
    setValueInput(value);
  }

  async function getFornecedores() {
    try {
      const response = await api.get(`listarfornecedores/${valueInput}`);
      setFornecedores(response.data);
      setShowTable(true);
    } catch (error) {
      console.log(error);
    }
  }

  function handleSubmit() {
    getFornecedores();
  }

  return (
    <div className="container">
      <Header />
      <body className="body">
        <div className="presentation">
          <h3 className="hashtag">#somosofuturo</h3>
          <div className="text-presentation">
            <p className="text">
              A <strong className="name">Clarke Energia</strong> é a empresa
              pioneira em conectar clientes às maiores empresas de energia limpa
              do país.
            </p>
            <p className="text">
              Vem fazer um mundo melhor e economizar com a Clarke!
            </p>
          </div>
        </div>
        <div className="search-supplier">
          <div className="search">
            <h2>Encontre seu fornecedor de energia limpa!</h2>
          </div>
          <div className="question">
            <h3>Qual seu consumo mensal em kWh?</h3>
          </div>
          <div className="input-glass">
            <input
              className="input"
              placeholder="Ex.: 30000"
              value={valueInput}
              onChange={(e) => handleValue(e)}
            />
            <img
              className="magnifying-glass"
              src={search}
              alt="search"
              onClick={() => handleSubmit()}
            />
          </div>
          {showTable && (
            <div className="tabela-container">
              <div className="linha-cabecalho">
                <div>Nome</div>
                <div>Estado de Origem</div>
                <div>Custo/kWh</div>
                <div>Limite mínimo de kWh</div>
                <div>Nº total de clientes</div>
                <div>Avaliação média</div>
              </div>
              {/* {fornecedores.map(item, index) => {
                <div className="linha-dados">
                
              </div>}} */}
            </div>
          )}
        </div>
      </body>
    </div>
  );
}

export default Page1;
