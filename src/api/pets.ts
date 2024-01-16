import axios from "axios";

const getPets = async () => {
  const response = await axios.get(`${import.meta.env.VITE_API_URL}/pets`);
  return response.data;
};

export { getPets };
