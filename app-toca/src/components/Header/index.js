import { Centralized, Container, Img, ProfileImg } from "./styles";
import NavPages from "../NavPages";
import { AiOutlineMenu } from "react-icons/ai";
import Logo from "../../assets/LOGO PNG.png";
import MyProfile from "../MyProfile";
import { useState } from "react";

const Header = () => {
  const [displayNav, setDisplayNav] = useState(false);
  const [displayMyProfile, setDisplayMyProfile] = useState(false);

  return (
    <Container>
      <Centralized>
        <AiOutlineMenu
          onClick={() => setDisplayNav(!displayNav)}
          color="white"
          fontSize="35px"
        />
        {displayMyProfile && (
          <MyProfile setDisplayMyProfile={setDisplayMyProfile} />
        )}
        {displayNav && <NavPages />}
        <Img alt="logo" src={Logo} />
        <ProfileImg
          alt="profileImg"
          src={Logo}
          onClick={() => setDisplayMyProfile(!displayMyProfile)}
        />
      </Centralized>
    </Container>
  );
};

export default Header;
