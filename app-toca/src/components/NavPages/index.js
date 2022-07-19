import { Container, PageContainer } from "./styles";
import { useNavigate } from "react-router-dom";
import { FaMoneyBillWave } from "react-icons/fa"; //Adm
import { HiOutlineLightBulb } from "react-icons/hi"; //criacao
import { MdEvent } from "react-icons/md"; //eventos
import { MdPeopleAlt } from "react-icons/md"; //gp
import { GiAbstract050 } from "react-icons/gi"; //mkt

const NavPages = () => {
  const navigate = useNavigate();

  const pages = [
    {
      name: "ADM",
      icon: <FaMoneyBillWave color="white" fontSize="25px" />,
      path: "/adm",
    },
    {
      name: "Criação",
      icon: <HiOutlineLightBulb color="white" fontSize="25px" />,
      path: "/criacao",
    },
    {
      name: "Eventos",
      icon: <MdEvent color="white" fontSize="25px" />,
      path: "/eventos",
    },
    {
      name: "GEPE",
      icon: <MdPeopleAlt color="white" fontSize="25px" />,
      path: "/gp",
    },
    {
      name: "Marketing",
      icon: <GiAbstract050 color="white" fontSize="25px" />,
      path: "/mkt",
    },
  ];

  return (
    <Container>
      {pages.map((page, index) => {
        return (
          <PageContainer onClick={() => navigate(page.path)} key={index}>
            {page.icon}
            {page.name}
          </PageContainer>
        );
      })}
    </Container>
  );
};

export default NavPages;
