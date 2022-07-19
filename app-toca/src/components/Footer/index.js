import { Centralized, Container } from "./styles";
import { FaHome } from "react-icons/fa";
import Logo from "../../assets/LOGO PNG.png";
import { AiFillMessage } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Centralized>
        <FaHome
          onClick={() => navigate("/home")}
          color="#012B40"
          fontSize="35px"
        />
        <AiFillMessage color="#012B40" fontSize="35px" />
      </Centralized>
    </Container>
  );
};

export default Footer;
