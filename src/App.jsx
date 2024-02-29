import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import ProtectedRoute from "./components/ProtectedRoute";

import DashboardPage from "./pages/DashboardPage";
import GroupPage from "./pages/GroupPage";
import AboutPage from "./pages/AboutPage";
import ForgotPass from "./pages/ForgotPass";
import PlaneacionesPage from "./pages/PlaneacionesPage";
import CursosPage from "./pages/CursosPage";
import PatrocinadoresPage from "./pages/PatrocinadoresPage";
import CalendarPage from "./pages/CalendarPage";
import SettingPage from "./pages/SettingsPage";
import MainPage from "./pages/MainPage/MainPage";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/logout" />
          <Route path="/forgot" element={<ForgotPass />} />

          <Route element={<ProtectedRoute />}>
            <Route path="*" element={<DashboardPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/grupo" element={<GroupPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/planeaciones" element={<PlaneacionesPage />} />
            <Route path="/cursos" element={<CursosPage />} />
            <Route path="/sponsors" element={<PatrocinadoresPage />} />
            <Route path="/calendar" element={<CalendarPage />} />
            <Route path="/settings" element={<SettingPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
