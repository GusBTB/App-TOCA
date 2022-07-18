import { Centralized, Container, PostAreaTitle, PostText } from "./styles";

const Post = () => {
  return (
    <Container>
      <Centralized>
        <PostAreaTitle>MARKETING - Buiu</PostAreaTitle>
        <PostText>
          Tem como objetivo mostrar à faculdade o que é a T.O.C.A e no que
          acreditamos, de uma maneira bem descontraída (o tal do mkt menino
          ney), sempre buscando aderência do público. <br />
          Na maioria das vezes, de maneira colaborativa com a área Criação, ou
          em casos de parcerias, Administração, Marketing gera publicações que
          podem ser imagens ou vídeos.
        </PostText>
      </Centralized>
    </Container>
  );
};

export default Post;
