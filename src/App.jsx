import React from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { AuthProvider } from "./context/AuthContext";
import { EventProvider } from "./context/EventContext";
import { FieldProvider } from "./context/FieldContext";

import Home from "./components/Home/Home";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import ForgotPass from "./pages/ForgotPass";
import ErrorPage from "./pages/ErrorPage";

import DashboardPage from "./components/components/DashboardPage";
import GroupPage from "./components/components/GroupPage";
import PlaneacionesPage from "./components/Planeaciones/PlaneacionesPage";
import Cards from "./components/Planeaciones/components/Cards";
import CursosPage from "./components/components/CursosPage";
//
import CursoUno from "./components/Cursos/CursoUno";
import CursoDos from "./components/Cursos/CursoDos";
import CursoTres from "./components/Cursos/CursoTres";
//
import PatrocinadoresPage from "./components/components/PatrocinadoresPage";
import CalendarPage from "./components/components/CalendarPage";
import SettingPage from "./components/components/SettingsPage";
import MainPage from "./pages/MainPage/MainPage";

import { UserProvider } from "./context/UserContext";
import { GroupProvider } from "./context/GroupContext";

function App() {
  return (
    <AuthProvider>
      <Router>
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
            <Route
              path="grupos"
              element={
                <FieldProvider>
                  <GroupProvider>
                    <GroupPage />
                  </GroupProvider>
                </FieldProvider>
              }
            />
            <Route
              path="planeaciones"
              element={
                <FieldProvider>
                  <PlaneacionesPage />
                </FieldProvider>
              }
            />
            <Route path="cards" element={<Cards />} />
            <Route path="cursos" element={<CursosPage />} />
            <Route path="sponsors" element={<PatrocinadoresPage />} />
            <Route
              path="calendario"
              element={
                <EventProvider>
                  <CalendarPage />
                </EventProvider>
              }
            />
            <Route
              path="ajustes"
              element={
                <UserProvider>
                  <SettingPage />
                </UserProvider>
              }
            />
            <Route path="/home/cursos/cursouno" element={<CursoUno />} />
            <Route path="/home/cursos/cursodos" element={<CursoDos />} />
            <Route path="/home/cursos/cursotres" element={<CursoTres />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
