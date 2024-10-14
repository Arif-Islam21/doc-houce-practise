import axios from "axios";
import { useState } from "react";
const useUploadImage = () => {
  const [imageUrl, setImageUrl] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append("image", file);

    setLoading(true);
    setError(null);
  };

  return <div></div>;
};

export default useUploadImage;
