import React, { useEffect, useState, useRef } from "react";
import { FloatButton, Modal } from "antd";
import { Select, SelectItem, TextInput } from "@tremor/react";
import { useForm } from "react-hook-form";
import { useGroup } from "../../context/GroupContext";
import { useFields } from "../../context/FieldContext";
import Astroboys from "../../assets/astroboys.jpg";
import { uploadImageToCloudinary } from "../../services/CloudinaryService";

export const GroupPage = () => {
  const [open, setOpen] = useState(false);
  const [isEditable, setIsEditable] = useState(false);
  const { fields } = useFields();
  const { groups, setGroups, addGroup, updateGroup, deleteGroup } = useGroup();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const imageRef = useRef(null);

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
      values.photo = await handleImageUpload();

    console.log(values);

    if (!values._id) {
      // console.log("Post:" + values._id);
      addGroup(values);
    } else {
      // console.log("Put:" + values._id);
      updateGroup(values);
    }
    setOpen(false);
  });

  const handleCreateClick = () => {
    setIsEditable(false);
    setOpen(true);
  };

  const handleEditClick = async (groupId) => {
    const values = await groups.find((item) => item._id === groupId);
    setValue("_id", values?._id || "");
    setValue("phase", values?.phase || "");
    setValue("grade", values?.grade || "");
    setValue("school", values?.school || "");
    setValue("field", values?.field || "");
    setIsEditable(true);
    setOpen(true);
  };

  return (
    <div className="flex flex-row min-h-screen bg-gray-100 text-gray-800">
      <main className="main flex flex-col flex-grow md:ml-0 transition-all duration-150 ease-in mx-auto">
        <div className="main-content flex flex-col flex-grow p-4">
          {/* <h1 className="font-bold text-2xl text-gray-700">Grupos</h1> */}
          <div className="container mx-auto flex flex-wrap">
            {groups.map((item) => (
              <div key={item._id} className="w-full md:w-1/3 lg:w-1/3 p-2">
                <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl">
                  <div className="relative h-56 mx-4 mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
                    <img src={item.photo} alt="image" />
                  </div>
                  <div className="p-6">
                    <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                      {item.school}
                    </h5>
                    <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                      Fase de grupo: {item.phase}
                    </p>
                    <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                      Grado de grupo: {item.grade}
                    </p>
                  </div>
                  <div className="p-6 pt-0">
                    <button
                      className="m-2 align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-red-600 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                      type="button"
                      onClick={() => deleteGroup(item._id)}
                    >
                      Eliminar
                    </button>
                    <button
                      className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-blue-600 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                      type="button"
                      onClick={() => handleEditClick(item._id)}
                    >
                      Editar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col flex-grow rounded mt-4 ">
            {/* Boton con formulario flotante */}
            <FloatButton onClick={handleCreateClick} tooltip="Crear Grupo" />
            <Modal
              centered
              open={open}
              onCancel={() => setOpen(false)}
              footer={[
                <button
                  key="save"
                  type="submit"
                  onClick={onSubmit}
                  className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  {isEditable ? "Editar" : "Crear"}
                </button>,
              ]}
            >
              <h1 className="font-bold text-2xl text-gray-700">
                {isEditable ? "Editar grupo" : "Crear grupo"}
              </h1>
              {/* Formulario */}
              <form className="w-full max-w-lg">
                {/* <input type="hidden" {...register("_id")} /> */}
                <div className="flex flex-wrap -mx-3 mb-6 mt-3">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-first-name"
                    >
                      Fases de grupo
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      id="grid-first-name"
                      type="text"
                      placeholder="Fases"
                      {...register("phase")}
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-last-name"
                    >
                      Grado de grupo
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-last-name"
                      type="text"
                      placeholder="Grado"
                      {...register("grade")}
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 ">
                  <div className="w-full px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Escuela
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-password"
                      type="text"
                      placeholder="Universidad Tecnologica del sur de Sonora"
                      {...register("school")}
                    />
                  </div>
                  <div className="w-full px-3 mb-6 md:mb-0">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-state"
                    >
                      Campos formativos
                    </label>
                    <div className="relative">
                      <select
                        className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-state"
                        {...register("field")}
                      >
                        {fields.map((item) => (
                          <option key={item._id} value={item._id}>
                            {item.name}
                          </option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"></div>
                    </div>
                  </div>
                  <div className="w-full px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Foto
                    </label>
                    <input
                      // className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      // id="grid-password"
                      type="file"
                      ref={imageRef}
                    />
                  </div>
                </div>
              </form>
              {/* Formulario */}
            </Modal>
            {/* Boton con formulario flotante */}
          </div>
        </div>
      </main>
    </div>
  );
};
export default GroupPage;
