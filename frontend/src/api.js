import axios from "axios";

const API_URL = "http://127.0.0.1:8000/predict/";

export const predictStroke = (file) => {
  const formData = new FormData();
  formData.append("file", file);

  return axios.post(API_URL, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
