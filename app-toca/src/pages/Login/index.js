import { BottomDiv, Container, UpperDiv, Img } from "./styles";
import { Input } from "../../components/Input/styles";
import { Button } from "../../components/Button/styles";
import { SimpleTitle } from "../../components/SimpleTitle/styles";
import Logo from "../../assets/LOGO PNG.png";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const Login = () => {
  return (
    <Container>
      <UpperDiv>
        <Img alt="logo" src={Logo} />
      </UpperDiv>
      <BottomDiv>
        <Input placeholder="E-mail" />
        <Input placeholder="Senha" />
        <Button>Login</Button>
      </BottomDiv>
    </Container>
  );
};

export default Login;
