import { useState, useCallback } from "react";

const useHttp = () => {
    const [loading, setLoading] = useState(false),
          [error, setError] = useState(null);

          const request = useCallback(async (url, method = 'GET', body = null, headers = {'Content-type': 'application/json'}) => {

            setLoading(true);
    
            try {
                const respone = await fetch(url,{method, body, headers });
    
                // if (!respone.ok) {
                //     throw new Error('Could not fetch this');
                // }
    
                const data = await respone.json();
    
                setLoading(false);
                return data;
            } catch(e) {
                setLoading(false);
                setError(e.message);
                throw e;
            }
    
        }, []);
    const clearError = useCallback(() => setError(null), []);

    return {loading, request, error, clearError};
}

export default useHttp;