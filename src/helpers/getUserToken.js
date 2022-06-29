const getUserToken = () => {
    return localStorage.getItem("Token")
};

export default getUserToken;