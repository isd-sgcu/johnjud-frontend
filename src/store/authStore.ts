import { create } from 'zustand';
import { signIn } from '@/api/auth/signIn'

const useAuthStore = create((set) => ({
    
    // keep login status
    isLoggedIn : false,
    setIsLoggedIn : (loggedIn : boolean) => set({isLoggedIn : loggedIn}),
    
    // user data (name, email, etc) เผื่อจะใช้
    user : null,
    
    // for access token
    accessToken : null,
    setAccessToken : (token : string) => set({accessToken : token}),
    clearAceessToken : () => set({accessToken : null}),
    
    // for refresh token
    refreshToken : null,
    setRefreshToken : (token : string) => set({refreshToken : token}),
    clearRefreshToken : () => set({refreshToken : null}),

    // loading
    isLoading : false,
    setLoading : (loading : boolean) => set({isLoading : loading}),

    // error
    error : null,
    setError : (error : unknown) => set({error : error}),
    
    // session expired
    sessionExpired : null,
    setSessionExpired : (expired : boolean) => set({sessionExpired : expired}),


    signIn: async (email: string, password: string) => {
        set({ isLoading: true });
        try {
            const { access_token : authToken, expires_in : expiresIn, refresh_token : refreshToken } = await signIn(email, password);
            set({ isLoggedIn : true, token : authToken, expires_in : expiresIn, refreshToken : refreshToken});
        } catch (error : unknown) {
            set({ error });
        } finally {
            set({ isLoading: false });
        }
    }

}));

export default useAuthStore;