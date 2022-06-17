import useHttp from "../components/hooks/http.hook";

const useProjectService = () => {
    const {loading, request, error, clearError} = useHttp(),
          _apiBase = 'http://localhost:3001',
          _userToken = localStorage.getItem("Token");


    const getAllClaims = async (sort = 'title', order = 'desc') => {
        const res = await request(`${_apiBase}/claim?offset=0&column=${sort}&sort=${order}`, 'GET', null, {'Authorization': `Bearer ${_userToken}`,

        'Content-Type': 'application/json'});
        return res.claims;
    }
    
    const getClaim = async (id) => {
        const res = await request(`${_apiBase}/claim/${id}`, 'GET', null, {'Authorization': `Bearer ${_userToken}`,

        'Content-Type': 'application/json'});
        return res;
    }

    const registration = async (body) => {
        const res = await request(`${_apiBase}/auth/registration`, 'POST', JSON.stringify(body), {'Content-Type': 'application/json;charset=utf-8'})
        return res;
    }

    const authorization = async (body) => {
        const res = await request(`${_apiBase}/auth/login`, 'POST', JSON.stringify(body), {'Content-Type': 'application/json;charset=utf-8'})
        
        localStorage.setItem("Token", res.token);
        localStorage.setItem('User', 
            JSON.stringify(
            {'fullName': res.fullName}));

        return res;
    }

    const createUser = async (body) => {
        const res = await request(`${_apiBase}/user`, 'POST', JSON.stringify(body), {'Authorization': `Bearer ${_userToken}`,

        'Content-Type': 'application/json'})
        return res;
    }

    const getUsers = async () => {
        const res = await request(`${_apiBase}/user`, 'GET', null, {'Authorization': `Bearer ${_userToken}`,

        'Content-Type': 'application/json'});
        return res;
    }

    const updateClaim = async (body, id) => {
        const res = await request(`${_apiBase}/claim/${id}`, 'PUT', JSON.stringify(body), {'Authorization': `Bearer ${_userToken}`,

        'Content-Type': 'application/json'});
        return res;
    }

    const createNewClaim = async (body) => {
        const res = await request(
            `${_apiBase}/claim`, 

            'POST', 

            JSON.stringify(body), 
            
            {'Authorization': `Bearer ${_userToken}`,

            'Content-Type': 'application/json'})

        return res;
    }

    return {
        loading, request, error, clearError, 
        getAllClaims, registration, authorization, 
        createNewClaim, getClaim, createUser, 
        getUsers, updateClaim};
}

export default useProjectService;