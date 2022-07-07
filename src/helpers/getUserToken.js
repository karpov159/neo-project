import localStorage from "./localStorage";

const getUserToken = () => {
    const User = new localStorage();
    const {token} = User.getUser();
    return token;
};

export default getUserToken;