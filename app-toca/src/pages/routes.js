import { Routes, Route } from "react-router-dom";
import { ProtectedRoute } from "./route";

import Login from "./Login";
import Adm from "./Administracao";
import Criacao from "./Criacao";
import Eventos from "./Eventos";
import GP from "./GP";
import Home from "./Home";
import Mkt from "./Marketing";
import Register from "./Register";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="home" element={<Home />} />
      <Route path="adm" element={<Adm />} />
      <Route path="criacao" element={<Criacao />} />
      <Route path="eventos" element={<Eventos />} />
      <Route path="gp" element={<GP />} />
      <Route path="mkt" element={<Mkt />} />
    </Routes>
  );
};

export default AppRoutes;
