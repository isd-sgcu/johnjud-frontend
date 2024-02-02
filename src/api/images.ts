import { Image } from "@/types/common";
import axios from "axios"

type postImageRequest = {
    file : string,
    pet_id? : string,
}

type postImageResponse = Image

const postImage = async (data : postImageRequest) => {
    const response = await axios.post<postImageResponse>(`${import.meta.env.VITE_API_URL}/images`, data);
    return response.data;
}

export default postImage;
export type {postImageRequest , postImageResponse};