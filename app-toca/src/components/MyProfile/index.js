import {
  AgeYear,
  Centralized,
  Container,
  Img,
  MiddleAreaDiv,
  MiddleDiv,
  MiddleEmailDiv,
  PhraseDiv,
  UpperDiv,
  UpperLeftDiv,
  UpperRightDiv,
  MiddleEmaillDiv,
  AreasDiv,
  UpperLeftDivDown,
  InsideareasDiv,
} from "./styles";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { SimpleTitle } from "../SimpleTitle/styles";
import { ButtonSecondary } from "../Button/styles";
import img from "../../assets/image (1).png";

const MyProfile = ({ setDisplayMyProfile }) => {
  const user = {
    img: img,
    email: "gustavocs81@usp.br",
    password: "$2a$10$/PkAa1LIZpGywBmK8O9AnO7ULotz8aUaiQW3ibfgKQ6wH7OxZq8ZC",
    ehlider: true,
    area: ["Marketing", "Administração"],
    nome: "Gustavo da Costa",
    apelido: "Buiu",
    idade: 22,
    curso: "EQN",
    ano: 19,
    frase: "Sem piteira fica pegado",
    id: 1,
  };
  return (
    <Container>
      <Centralized>
        <UpperDiv>
          <UpperLeftDiv>
            <AiOutlineCloseCircle
              fontSize="30px"
              color="#012B40"
              onClick={() => setDisplayMyProfile(false)}
            />
            <UpperLeftDivDown>
              <SimpleTitle fontSize="20px" color="black">
                {user.apelido}
              </SimpleTitle>
              <SimpleTitle fontSize="15px" color="black">
                {user.nome}
              </SimpleTitle>
            </UpperLeftDivDown>
          </UpperLeftDiv>
          <UpperRightDiv>
            <Img alt="userImg" src={img} />
          </UpperRightDiv>
        </UpperDiv>
        <MiddleDiv>
          <AreasDiv>
            <SimpleTitle fontSize="20px" color="black">
              Área(s)
            </SimpleTitle>
            <InsideareasDiv>
              {user.area.map((area, index) => (
                <SimpleTitle fontSize="18px" color="black" key={index}>
                  {area}
                </SimpleTitle>
              ))}
            </InsideareasDiv>
          </AreasDiv>
          <MiddleEmaillDiv>
            <SimpleTitle fontSize="20px" color="black">
              {user.email}
            </SimpleTitle>
          </MiddleEmaillDiv>
          <MiddleEmailDiv>
            <AgeYear>
              <SimpleTitle fontSize="20px" color="black">
                {user.idade} {"anos"}
              </SimpleTitle>
            </AgeYear>
            <AgeYear>
              <SimpleTitle fontSize="20px" color="black">
                {"0"}
                {user.ano}
              </SimpleTitle>
              <SimpleTitle fontSize="20px" color="black">
                {user.curso}
              </SimpleTitle>
            </AgeYear>
          </MiddleEmailDiv>
          <PhraseDiv>
            <SimpleTitle fontSize="20px" color="black">
              {user.frase}
            </SimpleTitle>
          </PhraseDiv>
        </MiddleDiv>
        <ButtonSecondary width="150px" height="50px" fontSize="20px">
          Editar perfil
        </ButtonSecondary>
      </Centralized>
    </Container>
  );
};

export default MyProfile;
