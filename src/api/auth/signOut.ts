import axios from 'axios';

interface SignOutResponse {
    is_success: boolean;
}

const signOut = async () => {
    const response = await axios.post<SignOutResponse>(
        `${import.meta.env.VITE_API_URL}/auth/signout`
    );
    
    return response.data;
}

export {signOut}
export type {SignOutResponse}
