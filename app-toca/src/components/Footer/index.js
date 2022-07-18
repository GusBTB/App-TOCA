import { Centralized, Container } from "./styles";
import { FaHome } from "react-icons/fa";
import Logo from "../../assets/LOGO PNG.png";
import { AiFillMessage } from "react-icons/ai";

const Footer = () => {
  return (
    <Container>
      <Centralized>
        <FaHome color="#012B40" fontSize="35px" />
        <AiFillMessage color="#012B40" fontSize="35px" />
      </Centralized>
    </Container>
  );
};

export default Footer;
