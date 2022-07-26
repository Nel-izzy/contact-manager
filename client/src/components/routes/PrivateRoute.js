import { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";

const PrivateRoute = ({ children, ...rest }) => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, loading } = authContext;

  if (!isAuthenticated && !loading) {
    return <Navigate to="/login" {...rest} />;
  }
  return children;
};

export default PrivateRoute;
