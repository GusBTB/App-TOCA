import "./styles.css";
import logo from "../../assets/LOGO PNG.png";

function Login() {
  return (
    <div className="login">
      <div className="login__logoContainer">
        <img alt="logo" className="login__logoContainer__logo" src={logo}></img>
      </div>
      <div className="login__data">
        <input className="login__data__input" placeholder="Email" />
        <input className="login__data__input" placeholder="Senha" />
        <button className="login__data__button">Login</button>
      </div>
    </div>
  );
}

export default Login;
