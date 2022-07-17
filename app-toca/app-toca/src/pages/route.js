import { useContext } from "react";
import { FormContext } from "../providers/Form";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ element: Element, onlyFor }) => {
  const { userToken } = useContext(FormContext);

  if (!userToken) {
    return <Navigate to="/" />;
  } else {
    return <>{Element}</>;
  }
};
