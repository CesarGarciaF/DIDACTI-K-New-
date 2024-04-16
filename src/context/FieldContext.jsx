import { createContext, useContext, useEffect, useState } from "react";
import { getFieldsRequest } from "../services/FieldService";

const FieldContext = createContext();

export const useFields = () => {
  const context = useContext(FieldContext);

  if (!context)
    throw new Error("useFields debe usarse dentro de un FieldProvider");

  return context;
};

export function FieldProvider({ children }) {
  const [fields, setFields] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFieldsData = async () => {
      try {
        await getFields();
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchFieldsData();
  }, []);

  const getFields = async () => {
    try {
      const res = await getFieldsRequest();
      setFields(res.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  // const createField = async (event) => {
  //   try {
  //     const res = await createFieldRequest(event);
  //     getFields();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const updateField = async (event) => {
  //   try {
  //     const res = await updateFieldRequest(event);
  //     getFields();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <FieldContext.Provider value={{ fields, getFields }}>
      {loading ? <p>Cargando...</p> : children}
    </FieldContext.Provider>
  );
}
