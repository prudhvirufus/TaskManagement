import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/userSlice";
import { useNavigate } from "react-router-dom";
const userFixtures = [
  {
    name: "admin",
    email: "admin@gmail.com",
    role: "admin",
    password: "123456",
  },
  {
    name: "manager",
    role: "manager@gmail.com",
    password: "123456",
  },
  {
    name: "employee",
    role: "employee@gmail.com",
    password: "123456",
  },
];

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginUserNow = () => {
    const user = "employee";
    if (user === "admin") {
      dispatch(
        loginUser({
          name: "ADMIN",
          isAuthenticated: true,
        })
      );
      navigate("admindashboard");
    } else if (user === "manager") {
      dispatch(
        loginUser({
          name: "MANAGER",
          isAuthenticated: true,
        })
      );
      navigate("managerdashboard");
    } else if (user === "employee") {
      navigate("employeedashboard");
      dispatch(
        loginUser({
          name: "EMPLOYEE",
          isAuthenticated: true,
        })
      );
    }
  };

  return (
    <div>
      <button onClick={loginUserNow}>Login</button>
    </div>
  );
};

export default Login;
