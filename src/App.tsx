import { Route, Routes } from "react-router-dom";
import "./App.css";
import {
  About,
  Login,
  EmployeeDashboard,
  ManagerDashoboard,
  AdminDashboard,
} from "./pages";
import { ProtectedRoute } from "./auth";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/employeedashboard"
          element={
            <ProtectedRoute>
              <EmployeeDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/managerdashboard"
          element={
            <ProtectedRoute>
              <ManagerDashoboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admindashboard"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        <Route path="/" element={<Login />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="*" element={<MissingPage />} /> */}
      </Routes>
    </>
  );
}

export default App;
