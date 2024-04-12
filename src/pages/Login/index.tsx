import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/userSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginUserNow = () => {
    dispatch(loginUser(true));
    navigate("/dashboard");
  };

  return (
    <div>
      <button onClick={loginUserNow}>Login</button>
    </div>
  );
};

export default Login;
