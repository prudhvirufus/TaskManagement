import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { InitialStateType } from "../../redux/userSlice";

interface Props {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: Props) => {
  const authObject = useSelector(
    (state: { user: InitialStateType }) => state.user
  );
  const location = useLocation();

  console.log(authObject);
  if (!authObject.user.isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoute;
