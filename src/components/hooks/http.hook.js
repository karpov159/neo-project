import { useState, useCallback } from "react";

const useHttp = () => {
    const [loading, setLoading] = useState(false),
          [error, setError] = useState(null);

          const request = useCallback(async (url, method = 'GET', body = null, headers = {'Content-type': 'application/json'}) => {

            setLoading(true);
    
            try {
                const response = await fetch(url,{method, body, headers });
                if (!response.ok) {
                    response.json().then(setError)
                    throw new Error('Error')

                } else {
                    const data = await response.json();
        
                    setLoading(false);
                    return data;
                }
    
                
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