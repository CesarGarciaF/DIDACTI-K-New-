import React, { useRef, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useUsers } from "../context/UserContext";
import moment from "moment/moment";
import { uploadImageToCloudinary } from "../services/CloudinaryService";

export const SettingsPage = () => {
  const { currentUser, setCurrentUser, updateUser } = useUsers();
  const [enableEdit, setEnableEdit] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const imageRef = useRef(null);

  useEffect(() => {
    setValue("name", currentUser?.name || "");
    setValue("firstName", currentUser?.firstName || "");
    setValue("secondName", currentUser?.secondName || "");
    setValue("gender", currentUser?.gender || "");
  }, [currentUser, setValue]);

  const handleImageUpload = async () => {
    const file = imageRef.current.files[0];
    const uploadPreset = "ehfdvbhz";

    try {
      const imageUrl = await uploadImageToCloudinary(file, uploadPreset);
      return imageUrl;
    } catch (err) {
      console.error("Error al subir imagen", err);
    }
  };

  const onSubmit = handleSubmit(async (values) => {
    if (imageRef.current && imageRef.current.files.length > 0)
      values.avatar = await handleImageUpload();
    // setCurrentUser(values);
    updateUser(values);
    () => enableEdit(false);
  });

  return (
    <div className="flex flex-row bg-gray-100">
      <main className="main flex flex-col flex-grow md:ml-0 transition-all duration-150 ease-in mx-auto">
        <div className="main-content flex flex-col flex-grow p-2">
          <div className="flex flex-col flex-grow rounded mt-1">
            <div className="md:flex no-wrap md:-mx-2 ">
              <div className="w-full md:w-3/12 md:mx-2">
                <div className="bg-white p-3 border-t-4 border-green-400">
                  <div className="image overflow-hidden">
                    <img
                      className="h-auto w-full mx-auto"
                      src={currentUser?.avatar}
                      alt=""
                    />
                  </div>
                  <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">
                    {currentUser?.name}
                  </h1>
                  <ul className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                    <li className="flex items-center py-3">
                      <span>Registrado desde</span>
                      <span className="ml-auto">
                        {moment(currentUser.createdAt).format("MMMM Do YYYY")}
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="my-4"></div>
              </div>
              <div className="w-full md:w-9/12 mx-2 h-64">
                <div className="bg-white p-3 shadow-sm rounded-sm">
                  <form>
                    <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                      <span clas="text-green-500">
                        <svg
                          className="h-5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                      </span>
                      <span className="tracking-wide">
                        Información de usuario
                      </span>
                    </div>
                    <div className="text-gray-700">
                      <div className="grid md:grid-cols-3 text-sm">
                        <div className="grid grid-cols-2">
                          <div className="px-4 py-2 font-semibold">
                            Nombre(s)
                          </div>
                          {enableEdit ? (
                            <input
                              type="text"
                              className="form-control px-4 py-2"
                              {...register("name")}
                            />
                          ) : (
                            <div className="px-4 py-2">{currentUser?.name}</div>
                          )}
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="px-4 py-2 font-semibold">
                            Apellido Paterno
                          </div>
                          {enableEdit ? (
                            <input
                              type="text"
                              className="form-control px-4 py-2"
                              {...register("firstName")}
                            />
                          ) : (
                            <div className="px-4 py-2">
                              {currentUser?.firstName}
                            </div>
                          )}
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="px-4 py-2 font-semibold">
                            Apellido Materno
                          </div>
                          {enableEdit ? (
                            <input
                              type="text"
                              className="form-control px-4 py-2"
                              {...register("secondName")}
                            />
                          ) : (
                            <div className="px-4 py-2">
                              {currentUser?.secondName}
                            </div>
                          )}
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="px-4 py-2 font-semibold">Género</div>
                          {enableEdit ? (
                            <select
                              {...register("gender")}
                              className="form-control"
                            >
                              <option value={true}>Masculino</option>
                              <option value={false}>Femenino</option>
                            </select>
                          ) : (
                            <div className="px-4 py-2">
                              {currentUser ? "Masculino" : "Femenino"}
                            </div>
                          )}
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="px-4 py-2 font-semibold">Email</div>
                          <div className="px-4 py-2">
                            <a
                              className="text-blue-800"
                              href="mailto:jane@example.com"
                            >
                              {currentUser.email}
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-6" hidden={!enableEdit}>
                        <div className="px-4 py-2 font-semibold">Foto</div>
                        <input
                          type="file"
                          accept="image/*"
                          className="px-4 py-2"
                          ref={imageRef}
                        />
                      </div>
                      {!enableEdit ? (
                        <button
                          onClick={() => setEnableEdit(true)}
                          className="block w-full text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4"
                        >
                          ¿Quieres editar tu información?
                        </button>
                      ) : (
                        <div className="d-flex">
                          <button
                            onClick={() => setEnableEdit(false)}
                            className="block w-full text-red-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4"
                          >
                            Cancelar
                          </button>
                          <button
                            type="submit"
                            onClick={onSubmit}
                            className="block w-full text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4"
                          >
                            Guardar cambios
                          </button>
                        </div>
                      )}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
export default SettingsPage;
