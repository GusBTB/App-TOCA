import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  AreaTitle,
  ButtonsDiv,
  Container,
  MembersDiv,
  MiddleDiv,
} from "../AreaPagesStyle/styles.js";
import { Button, ButtonSecondary } from "../../components/Button/styles";
import Post from "../../components/Post";
import AreaMembers from "../../components/AreaMembers";
import AreaDescription from "../../components/AreaDescription";

const Criacao = () => {
  // AreaDescription AreaLastPost Botão para reuniões

  return (
    <Container>
      <Header />
      <MiddleDiv>
        <AreaTitle>Criacao</AreaTitle>
        <MembersDiv>
          <AreaMembers />
        </MembersDiv>
        <AreaDescription />
        <Post />
        <ButtonsDiv>
          <Button width="40%" height="40px" fontSize="17px">
            Criar post
          </Button>
          <ButtonSecondary width="40%" height="40px" fontSize="17px">
            Reuniões
          </ButtonSecondary>
        </ButtonsDiv>
      </MiddleDiv>
      <Footer />
    </Container>
  );
};

export default Criacao;
