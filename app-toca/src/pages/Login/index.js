import { BottomDiv, Container, UpperDiv, Img, InputErrorDiv } from "./styles";
import { Input } from "../../components/Input/styles";
import { Button } from "../../components/Button/styles";
import { SimpleTitle } from "../../components/SimpleTitle/styles";
import { MiniErrors } from "../../components/MiniErrors/styles";
import Logo from "../../assets/LOGO PNG.png";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const Login = () => {
  const formSchema = yup.object().shape({
    email: yup
      .string()
      .email("Formato de e-mail inválido")
      .required("E-mail obrigatório"),
    password: yup.string().required("Senha origatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = (data) => {
    console.log(data);
  };

  return (
    <Container>
      <UpperDiv>
        <Img alt="logo" src={Logo} />
      </UpperDiv>
      <BottomDiv onSubmit={handleSubmit(onSubmitFunction)}>
        <InputErrorDiv>
          {errors.email && <MiniErrors>{errors.email.message}</MiniErrors>}
          <Input placeholder="E-mail" {...register("email")} />
        </InputErrorDiv>
        <InputErrorDiv>
          {errors.password && (
            <MiniErrors>{errors.password.message}</MiniErrors>
          )}
          <Input
            placeholder="Senha"
            type="password"
            {...register("password")}
          />
        </InputErrorDiv>

        <Button type="submit" width="150px" height="50px" fontSize="20px">
          Login
        </Button>
      </BottomDiv>
    </Container>
  );
};

export default Login;
