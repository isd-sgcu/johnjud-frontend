import axios from "axios"

const updatePet = async (id : string) => {
    axios.post(`${import.meta.env.VITE_API_URL}/pets`)
}