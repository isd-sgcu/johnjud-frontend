import axios from "axios";

interface CreateImageProps {
    data : string, // base64
    petId? : string
}

const useCreateImage = (data : CreateImageProps) => {
    return ( 
        axios.post(`${import.meta.env.VITE_API_URL}/images` , data)
     );
}