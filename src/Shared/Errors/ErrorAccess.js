import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setBrowseAccessError, setNewClaimAccesError } from "../../store/ClaimsSlice";

const ErrorAccess = ({text}) => {
    const dispatch = useDispatch();
    const {browseAccessError, newClaimAccesError} = useSelector(state => state.claims);


    useEffect(() => {
        const errorTimeout = setTimeout(() => {
                dispatch(setBrowseAccessError(false));
                dispatch(setNewClaimAccesError(false));
            }, 3000);
          
        return () => {
            clearTimeout(errorTimeout);
        };
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleClick = () => {
        if (browseAccessError) {
            dispatch(setBrowseAccessError(false));
        }
        if (newClaimAccesError) {
            dispatch(setNewClaimAccesError(false));
        }
    }

    return (
        <div className="error-access">
            <div onClick={handleClick} className="error-access__close">×</div>
            <div className="error-access__img">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512">
                    <path d="M64 352c17.69 0 32-14.32 32-31.1V64.01c0-17.67-14.31-32.01-32-32.01S32 46.34 32 64.01v255.1C32 337.7 46.31 352 64 352zM64 400c-22.09 0-40 17.91-40 40s17.91 39.1 40 39.1s40-17.9 40-39.1S86.09 400 64 400z"/>
                </svg>
            </div>
            <p className="error-access__text">{text}</p>
        </div>
    )
}

export default ErrorAccess;