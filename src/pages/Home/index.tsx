import { useDispatch } from "react-redux";
import { logoutUser } from "../../redux/userSlice";

const Home = () => {
  const dispatch = useDispatch();
  const logoutCurrentUser = () => {
    dispatch(logoutUser());
  };
  return (
    <div>
      Home
      <button onClick={logoutCurrentUser}>Logout</button>
    </div>
  );
};

export default Home;
