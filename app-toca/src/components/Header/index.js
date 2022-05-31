import "./styles.css";
import logo from "../../assets/LOGO PNG.png";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";

function Header() {
  //set header div width to 90% centralized
  return (
    <header className="header">
      <div className="header__div">
        <button className="header__div__areas">
          <AiOutlineUnorderedList className="svgArea" />
        </button>
        <img alt="logo" className="header__div__logo" src={logo}></img>
        <button className="header__div__profile">
          <AiOutlineUser className="svgProfile" />
        </button>
      </div>
    </header>
  );
}

export default Header;
