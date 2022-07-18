import {
  Centralized,
  Container,
  DescriptionText,
  DescriptionTitle,
} from "./styles";

const AreaDescription = () => {
  return (
    <Container>
      <Centralized>
        <DescriptionTitle>DESCRIÇÃO</DescriptionTitle>
        <DescriptionText>
          Tem como objetivo mostrar à faculdade o que é a T.O.C.A e no que
          acreditamos, de uma maneira bem descontraída (o tal do mkt menino
          ney), sempre buscando aderência do público. <br />
          Na maioria das vezes, de maneira colaborativa com a área Criação, ou
          em casos de parcerias, Administração, Marketing gera publicações que
          podem ser imagens ou vídeos.
        </DescriptionText>
      </Centralized>
    </Container>
  );
};

export default AreaDescription;
