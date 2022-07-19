import { Centralized, Container, Img, ProfileImg } from "./styles";
import NavPages from "../NavPages";
import { AiOutlineMenu } from "react-icons/ai";
import Logo from "../../assets/LOGO PNG.png";
import { useState } from "react";

const Header = () => {
  const [displayNav, setDisplayNav] = useState(false);

  return (
    <Container>
      <Centralized>
        <AiOutlineMenu
          onClick={() => setDisplayNav(!displayNav)}
          color="white"
          fontSize="35px"
        />
        {displayNav && <NavPages />}
        <Img alt="logo" src={Logo} />
        <ProfileImg alt="profileImg" src={Logo} />
      </Centralized>
    </Container>
  );
};

export default Header;
