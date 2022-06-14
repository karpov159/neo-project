import useHttp from "../components/hooks/http.hook";

const useProjectService = () => {
    const {loading, request, error, clearError} = useHttp(),
          _apiKey = 'http://localhost:3001/claim',
          _registration = 'http://localhost:3001/auth/registration',
          _authorization = 'http://localhost:3001/auth/login',
          _createNewClaim = 'http://localhost:3001/claim',
          _createUser = 'http://localhost:3001/user',
          _user = localStorage.getItem("Token");


    const getAllClaims = async (sort = 'title', order = 'desc') => {
        const res = await request(`${_apiKey}?offset=0&column=${sort}&sort=${order}`, 'GET', null, {'Authorization': `Bearer ${_user}`,

        'Content-Type': 'application/json'});
        return res.claims;
    }
    
    const getClaim = async (id) => {
        const res = await request(`${_apiKey}/${id}`, 'GET', null, {'Authorization': `Bearer ${_user}`,

        'Content-Type': 'application/json'});
        return res;
    }

    const registration = async (body) => {
        const res = await request(_registration, 'POST', JSON.stringify(body), {'Content-Type': 'application/json;charset=utf-8'})
        return res;
    }

    const authorization = async (body) => {
        const res = await request(_authorization, 'POST', JSON.stringify(body), {'Content-Type': 'application/json;charset=utf-8'})
        
        localStorage.setItem("Token", res.token);
        localStorage.setItem('User', 
            JSON.stringify(
            {'fullName': res.fullName}));
        console.log(JSON.parse(localStorage.getItem('User')))

        return res;
    }

    const createUser = async (body) => {
        const res = await request(_createUser, 'POST', JSON.stringify(body), {'Content-Type': 'application/json;charset=utf-8'})
        return res;
    }

    const createNewClaim = async (body) => {
        const res = await request(
            _createNewClaim, 

            'POST', 

            JSON.stringify(body), 
            
            {'Authorization': `Bearer ${_user}`,

            'Content-Type': 'application/json'})

        return res;
    }

    return {loading, request, error, clearError, getAllClaims, registration, authorization, createNewClaim, getClaim, createUser};
}

export default useProjectService;