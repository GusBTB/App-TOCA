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
      <Route path="home" element={<ProtectedRoute element={<Home />} />} />
      <Route path="adm" element={<ProtectedRoute element={<Adm />} />} />
      <Route
        path="criacao"
        element={<ProtectedRoute element={<Criacao />} />}
      />
      <Route
        path="eventos"
        element={<ProtectedRoute element={<Eventos />} />}
      />
      <Route path="gp" element={<ProtectedRoute element={<GP />} />} />
      <Route path="mkt" element={<ProtectedRoute element={<Mkt />} />} />
    </Routes>
  );
};
