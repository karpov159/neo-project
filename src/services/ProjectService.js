import useHttp from "../components/hooks/http.hook";

const useProjectService = () => {
    const {loading, request, error, clearError} = useHttp(),
          _apiKey = 'http://localhost:3001/claims',
          _registration = 'http://localhost:3001/auth/registration',
          _authorization = 'http://localhost:3001/auth/login';

    const getAllClaims = async () => {
        const res = await request(_apiKey);
        return res;
    }

    const onRegistration = async (body) => {
        const res = await request(_registration, 'POST', JSON.stringify(body), {'Content-Type': 'application/json;charset=utf-8'} )
        return res;
    }

    const onAuthorization = async (body) => {
        const res = await request(_authorization, 'POST', JSON.stringify(body), {'Content-Type': 'application/json;charset=utf-8'} )
        return res;
    }

    return {loading, request, error, clearError, getAllClaims, onRegistration, onAuthorization};
}

export default useProjectService;