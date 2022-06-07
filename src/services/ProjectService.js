import useHttp from "../components/hooks/http.hook";

const useProjectService = () => {
    const {loading, request, error, clearError} = useHttp(),
          _apiKey = 'http://localhost:3001/claims';

    const getAllClaims = async () => {
        const res = await request(_apiKey);
        return res;
    }

    return {loading, request, error, clearError, getAllClaims};
}

export default useProjectService;