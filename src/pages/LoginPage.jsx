import { useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useState, useEffect } from "react";

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signin, isAuthenticated, errors: signinErrors } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/home");
  }, [isAuthenticated]);

  const validateInput = (values) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(values.email)) {
      return "El formato del correo electrónico es inválido";
    }
    if (values.password.length < 8) {
      return "La contraseña debe tener al menos 8 caracteres";
    }
    // Puedes añadir más validaciones aquí según sea necesario.
    return null;
  };

  const onSubmit = handleSubmit(async (values) => {
    const validationError = validateInput(values);
    if (validationError) {
      alert(validationError);
      return;
    }
    await signin(values);
  });

  return (
    <section className="flex flex-col md:flex-row h-screen items-center justify-center">
      <div className="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
        <img
          src="https://source.unsplash.com/random"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12 flex items-center">
        <div className="w-full w-100">
          <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">
            Ingresa a tu cuenta
          </h1>
          {signinErrors.map((error, i) => (
            <div key={i} className="bg-red-500 p-2 text-white">
              {error}
            </div>
          ))}
          <form className="mt-6" onSubmit={onSubmit}>
            <div>
              <label className="block text-gray-700">Correo Electronico</label>
              <input
                type="email"
                name="email"
                placeholder="Ingrese su correo electronico"
                {...register("email", { required: true })}
                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
              />
              {errors.email && (
                <p className="text-red-500">El correo electrónico es requerido</p>
              )}
            </div>

            <div className="mt-4">
              <label className="block text-gray-700">Contraseña</label>
              <input
                type="password"
                name="password"
                {...register("password", { required: true })}
                placeholder="Ingrese su contraseña"
                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                focus:bg-white focus:outline-none"
              />
              {errors.password && (
                <p className="text-red-500">La contraseña es requerida</p>
              )}
            </div>

            <div className="text-right mt-2">
              <Link to={"/forgot"}>Olvidaste la contraseña?</Link>
            </div>

            <button
              type="submit"
              className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
              px-4 py-3 mt-6"
            >
              Entra
            </button>
          </form>

          <hr className="my-6 border-gray-300 w-full" />

          <p className="mt-8">
            No tienes una cuenta?{" "}
            <Link
              to="/signup"
              className="text-blue-500 hover:text-blue-700 font-semibold"
            >
              Crea una!
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
