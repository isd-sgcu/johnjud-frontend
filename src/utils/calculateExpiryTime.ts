export const calculateExpiryTime = (expiresIn: number): Date => {
    const currentTime = new Date();
    currentTime.setSeconds(currentTime.getSeconds() + expiresIn);
    return currentTime;
};