import img from "../../assets/image (1).png";
import { Container, MemberContainer, Circle, Name, UserImg } from "./styles";

const areaUsers = [
  {
    img: img,
    email: "gustavocs81@usp.br",
    password: "$2a$10$/PkAa1LIZpGywBmK8O9AnO7ULotz8aUaiQW3ibfgKQ6wH7OxZq8ZC",
    ehlider: true,
    area: "Marketing",
    nome: "Gustavo da Costa",
    apelido: "Buiu",
    idade: 22,
    curso: "EQN",
    ano: 19,
    frase: "Sem piteira fica pegado",
    id: 1,
  },
  {
    img: img,
    email: "gustavocs81@usp.br",
    password: "$2a$10$/PkAa1LIZpGywBmK8O9AnO7ULotz8aUaiQW3ibfgKQ6wH7OxZq8ZC",
    ehlider: true,
    area: "Marketing",
    nome: "Gustavo da Costa",
    apelido: "Buiu",
    idade: 22,
    curso: "EQN",
    ano: 19,
    frase: "Sem piteira fica pegado",
    id: 1,
  },
  {
    img: img,
    email: "gustavocs81@usp.br",
    password: "$2a$10$/PkAa1LIZpGywBmK8O9AnO7ULotz8aUaiQW3ibfgKQ6wH7OxZq8ZC",
    ehlider: true,
    area: "Marketing",
    nome: "Gustavo da Costa",
    apelido: "Buiu",
    idade: 22,
    curso: "EQN",
    ano: 19,
    frase: "Sem piteira fica pegado",
    id: 1,
  },
  {
    img: img,
    email: "gustavocs81@usp.br",
    password: "$2a$10$/PkAa1LIZpGywBmK8O9AnO7ULotz8aUaiQW3ibfgKQ6wH7OxZq8ZC",
    ehlider: true,
    area: "Marketing",
    nome: "Gustavo da Costa",
    apelido: "Buiu",
    idade: 22,
    curso: "EQN",
    ano: 19,
    frase: "Sem piteira fica pegado",
    id: 1,
  },
  {
    img: img,
    email: "gustavocs81@usp.br",
    password: "$2a$10$/PkAa1LIZpGywBmK8O9AnO7ULotz8aUaiQW3ibfgKQ6wH7OxZq8ZC",
    ehlider: true,
    area: "Marketing",
    nome: "Gustavo da Costa",
    apelido: "Buiu",
    idade: 22,
    curso: "EQN",
    ano: 19,
    frase: "Sem piteira fica pegado",
    id: 1,
  },
  {
    img: img,
    email: "gustavocs81@usp.br",
    password: "$2a$10$/PkAa1LIZpGywBmK8O9AnO7ULotz8aUaiQW3ibfgKQ6wH7OxZq8ZC",
    ehlider: true,
    area: "Marketing",
    nome: "Gustavo da Costa",
    apelido: "Buiu",
    idade: 22,
    curso: "EQN",
    ano: 19,
    frase: "Sem piteira fica pegado",
    id: 1,
  },
  {
    img: img,
    email: "gustavocs81@usp.br",
    password: "$2a$10$/PkAa1LIZpGywBmK8O9AnO7ULotz8aUaiQW3ibfgKQ6wH7OxZq8ZC",
    ehlider: true,
    area: "Marketing",
    nome: "Gustavo da Costa",
    apelido: "Buiu",
    idade: 22,
    curso: "EQN",
    ano: 19,
    frase: "Sem piteira fica pegado",
    id: 1,
  },
];

const AreaMembers = () => {
  //recebe page
  //fazer get dos users
  //if user.area === page => areaUsers.push(user)

  return (
    <Container>
      {areaUsers.map((user, index) => {
        return (
          <MemberContainer key={index}>
            <Circle>
              <UserImg alt="userImg" src={user.img} />
            </Circle>
            <Name>{user.apelido}</Name>
          </MemberContainer>
        );
      })}
    </Container>
  );
};

export default AreaMembers;
