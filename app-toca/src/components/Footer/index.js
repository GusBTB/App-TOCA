import "./styles.css";
import { AiTwotoneMessage } from "react-icons/ai";
import { AiTwotoneHome } from "react-icons/ai";

function Footer() {
  //set footer div width to 90% centralized
  return (
    <header className="footer">
      <div className="footer__div">
        <AiTwotoneHome className="svgFooter" />
        <AiTwotoneMessage className="svgFooter" />
      </div>
    </header>
  );
}

export default Footer;
