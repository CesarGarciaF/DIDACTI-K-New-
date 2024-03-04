import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

import Home from "./pages/Home/Home";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import ForgotPass from "./pages/ForgotPass";
import ErrorPage from "./pages/ErrorPage";

import DashboardPage from "./components/DashboardPage";
import GroupPage from "./components/GroupPage";
import PlaneacionesPage from "./components/PlaneacionesPage";
import CursosPage from "./components/CursosPage";
import PatrocinadoresPage from "./components/PatrocinadoresPage";
import CalendarPage from "./components/CalendarPage";
import SettingPage from "./components/SettingsPage";
import MainPage from "./components/MainPage/MainPage";


function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
        <Route path="*" element={<ErrorPage />} />
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/logout" />
          <Route path="/forgot" element={<ForgotPass />} />

          <Route path="/home/" element={<Home />}>
            <Route path="dashboard" element={<DashboardPage />} />
            <Route path="grupo" element={<GroupPage />} />
            <Route path="planeaciones" element={<PlaneacionesPage />} />
            <Route path="cursos" element={<CursosPage />} />
            <Route path="sponsors" element={<PatrocinadoresPage />} />
            <Route path="calendar" element={<CalendarPage />} />
            <Route path="settings" element={<SettingPage />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
