import { Image } from "@/types/common";
import axios from "axios";

type postImageRequest = {
  file: File;
  pet_id?: string;
};

interface postImageResponse extends Image {}

const postImage = async (
  data: postImageRequest,
  token: string | null
): Promise<postImageResponse> => {
  const formData = new FormData();
  formData.append("file", data.file);
  if (data.pet_id) formData.append("pet_id", data.pet_id);

  const response = await axios.post<postImageResponse>(
    `${import.meta.env.VITE_API_URL}/images`,
    formData,
    {
      headers: {
        "Context-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};

export { postImage };
export type { postImageRequest, postImageResponse };
