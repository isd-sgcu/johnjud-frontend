import { Image } from "@/types/common";
import axios from "axios";

type postImageRequest = {
  file: File;
  pet_id?: string;
};

interface postImageResponse extends Image {}

const token: string = "";

const postImage = async (
  data: postImageRequest
): Promise<postImageResponse> => {
  const response = await axios.post<postImageResponse>(
    `${import.meta.env.VITE_API_URL}/images`,
    data,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};

export { postImage };
export type { postImageRequest, postImageResponse };
