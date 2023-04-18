import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Feed from "./components/Feed";
import UserContextProvider from "./context/UserContext";
import ProtectedRoutes from "./components/Routes/ProtectedRoutes";
import SignUp from "./components/SignUp";
import Header from "./components/Header";

function App() {
  return (
    <div className="min-h-screen bg-primary flex flex-col items-center justify-center text-white font-primary">
      <UserContextProvider>
        <Routes>
          <Route element={<Header />}>
            <Route element={<ProtectedRoutes />}>
              <Route path="/" element={<Home />} />
              <Route path="/feed" element={<Feed />} />
            </Route>
          </Route>

          <Route path="/signUp" element={<SignUp />} />
        </Routes>
      </UserContextProvider>
    </div>
  );
}

export default App;
