import { Image } from "@/types/common";
import axios from "axios";

type postImageRequest = {
  file: File;
  pet_id?: string;
};

interface postImageResponse extends Image {}

const token: string =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2pvaG5qdWQuaXNkLnNnY3UuaW4udGgiLCJleHAiOjE3MDgwMDk3NDQsImlhdCI6MTcwODAwNjE0NCwidXNlcl9pZCI6ImM0YTI1OTFlLTZjNWEtNDliNS05NDhkLTU0MDJkMjcxNGZlMiIsImF1dGhfc2Vzc2lvbl9pZCI6IjY4NDE2M2FkLWJkYWUtNDlhMS1hNTkyLWRkMjU4NjU0MThkMyJ9.u39pVKLTzl6FKQNDNDhghknxkaf9x3pP_3zD2oE_Fes";
const postImage = async (
  data: postImageRequest
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
