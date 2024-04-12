import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home, About, Login } from "./pages";
import { ProtectedRoute } from "./auth";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Routes>
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="*" element={<MissingPage />} /> */}
      </Routes>
    </>
  );
}

export default App;
