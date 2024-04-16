import axios from "axios";
export const uploadImageToCloudinary = async (file, uploadPreset) => {
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", uploadPreset);

  try {
    const response = await axios.post(
      "https://api.cloudinary.com/v1_1/doddqhnvn/image/upload",
      data
    );
    return response.data.secure_url;
  } catch (error) {
    console.error("Error al subir la imagen a Cloudinary:", error);
    throw error;
  }
};
