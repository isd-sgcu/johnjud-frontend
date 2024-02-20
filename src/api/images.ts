import useAuthStore from "@/store/authStore";
import { Image } from "@/types/common";
import axios from "axios";

type postImageRequest = {
  file: File;
  pet_id?: string;
};

interface postImageResponse extends Image {}

const postImage = async (
  data: postImageRequest
): Promise<postImageResponse> => {
  const { accessToken } = useAuthStore.getState();

  const formData = new FormData();
  formData.append("file", data.file);
  if (data.pet_id) formData.append("pet_id", data.pet_id);

  const response = await axios.post<postImageResponse>(
    `${import.meta.env.VITE_API_URL}/images`,
    formData,
    {
      headers: {
        "Context-Type": "multipart/form-data",
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  return response.data;
};

const deleteImage = async (id: string) => {
  const { accessToken } = useAuthStore.getState();

  const response = await axios.delete(`${import.meta.env.VITE_API_URL}/images/${id}`,{
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  console.log(response);
}

export { postImage, deleteImage };
export type { postImageRequest, postImageResponse };
