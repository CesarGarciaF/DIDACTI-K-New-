import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

import Home from "./components/Home/Home";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import ForgotPass from "./pages/ForgotPass";
import ErrorPage from "./pages/ErrorPage";

import DashboardPage from "./components/DashboardPage";
import GroupPage from "./components/GroupPage";
import PlaneacionesPage from "./components/PlaneacionesPage";
import CursosPage from "./components/CursosPage";
//
import CursoUno from "./components/Cursos/CursoUno";
import CursoDos from "./components/Cursos/CursoDos";
import CursoTres from "./components/Cursos/CursoTres";
//
import PatrocinadoresPage from "./components/PatrocinadoresPage";
// import CalendarPage from "./components/CalendarPage";
import CalendarPageV2 from "./components/CalendarPageV2";
import SettingPage from "./components/SettingsPage";
import MainPage from "./pages/MainPage/MainPage";
import { EventProvider } from "./context/EventContext";
import {
  Sidebar,
  SidebarItem,
} from "./components/Home/Layout/Sidebar/Sidebar.component";

import { LuHome } from "react-icons/lu";

function App() {
  return (
    <AuthProvider>
      <EventProvider>
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<ErrorPage />} />
            <Route path="/" element={<MainPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/logout" logout />
            <Route path="/forgot" element={<ForgotPass />} />

            <Route path="/home/" element={<Home />}>
              <Route index element={<Navigate to="dashboard" replace />} />
              <Route path="dashboard" element={<DashboardPage />} />
              <Route path="grupos" element={<GroupPage />} />
              <Route path="planeaciones" element={<PlaneacionesPage />} />
              <Route path="cursos" element={<CursosPage />} />
              <Route path="sponsors" element={<PatrocinadoresPage />} />
              <Route path="calendario" element={<CalendarPageV2 />} />
              <Route path="ajustes" element={<SettingPage />} />
              <Route path="/home/cursos/cursouno" element={<CursoUno />} />
              <Route path="/home/cursos/cursodos" element={<CursoDos />} />
              <Route path="/home/cursos/cursotres" element={<CursoTres />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </EventProvider>
    </AuthProvider>
  );
}

export default App;
