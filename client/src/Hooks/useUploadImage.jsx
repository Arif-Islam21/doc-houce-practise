import axios from "axios";
import { useState } from "react";
import useAxiosCommon from "./useAxiosCommon";
const useUploadImage = () => {
  const [imageUrl, setImageUrl] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  const uploadImage = async (file) => {
    const axiosCommon = useAxiosCommon();
    const formData = new FormData();
    formData.append("image", file);

    setLoading(true);
    setError(null);

    try {
      const response = await axiosCommon.post(
        "https://api.imgbb.com/1/upload",
        formData,
        {
          params: {
            key: "1135a6cc1b864b0ae791cca335a2fcb7",
          },
        }
      );

      const url = response.data.data.display_url;
      setImageUrl(url);
      setLoading(false);
      return url;
    } catch (error) {
      setError("Error uploading image. Please try again.");
      console.log(error);
      setLoading(false);
      return null;
    }
  };

  return { uploadImage, imageUrl, error, loading };
};

export default useUploadImage;
