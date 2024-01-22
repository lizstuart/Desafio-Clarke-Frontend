import "./styles.css";
import logo from "../../images/logo.png";

function Header() {
  return (
    <header className="header">
      <img className="logo" src={logo} alt={"logo"} />
      <div className="menu">
        <button className="options-menu">Sobre nós</button>
        <button className="options-menu">Impacto ambiental</button>
        <button className="options-menu">Nossas soluções</button>
        <button className="options-menu">Fornecedores</button>
        <button className="option-be-client">Seja nosso cliente</button>
      </div>
    </header>
  );
}

export default Header;
