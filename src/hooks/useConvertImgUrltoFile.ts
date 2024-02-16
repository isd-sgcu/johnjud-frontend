import { Image } from "@/types/common";

export async function useConvertImgUrltoFile(image : Image) : Promise<File | null>{
    try{
        const response = await fetch(image.url);
        const blob = await response.blob();
        return new File([blob], image.id);
    }catch(err){
        return null;
    }
}