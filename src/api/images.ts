import { Image } from "@/types/common";
import axios from "axios";

type postImageRequest = {
  file: string; // base64
  pet_id?: string;
};

interface postImageResponse extends Image {}

const postImage = async (
  data: postImageRequest
): Promise<postImageResponse> => {
  const response = await axios.post<postImageResponse>(
    `${import.meta.env.VITE_API_URL}/images`,
    data
  );
  return response.data;
};

export { postImage };
export type { postImageRequest, postImageResponse };
