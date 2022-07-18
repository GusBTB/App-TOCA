import { Centralized, Container, Img, ProfileImg } from "./styles";
import { AiOutlineMenu } from "react-icons/ai";
import Logo from "../../assets/LOGO PNG.png";

const Header = () => {
  return (
    <Container>
      <Centralized>
        <AiOutlineMenu color="white" fontSize="35px" />
        <Img alt="logo" src={Logo} />
        <ProfileImg alt="profileImg" src={Logo} />
      </Centralized>
    </Container>
  );
};

export default Header;
