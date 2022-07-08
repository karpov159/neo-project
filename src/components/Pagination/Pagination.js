import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import getTotalPages from '../../helpers/getTotalPages';
import store from '../../core/store';
import { selectAll, changePage } from '../../core/store/claim/claim.reducer';
import TotalPages from './TotalPages';
import Left from '../../assets/icons/pagination/Left.png';
import Right from '../../assets/icons/pagination/Right.png';

import './Pagination.scss';

const Pagination = () => {
    const {currentPage} = useSelector(state => state.claims);
    const claims = selectAll(store.getState());
    const dispatch = useDispatch();
    const totalPages = getTotalPages(claims);

    useEffect(() => {
        if (currentPage > totalPages) {
            dispatch(changePage(1));
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentPage, totalPages])

    const leftArrow = currentPage === 1 || totalPages < 1 ? 
        null : 
        <button 
        onClick={() => dispatch(changePage(currentPage - 1))}
        className="pagination__left"
        >
        <img src={Left} alt="left"/>    
        </button>;

    const rightArrow = 
        <button 
        style={currentPage === totalPages || totalPages < 1 
            ? {'visibility': 'hidden'} 
            : null} 
        onClick={() => dispatch(changePage(currentPage + 1))}
        className="pagination__right">
        <img src={Right} alt="right" />    
        </button>;
        
    return (
        <div className="pagination">
            {leftArrow}
            <TotalPages 
            active={currentPage} 
            totalPages={totalPages}
            />
            {rightArrow}
        </div>
    )
}



export default Pagination;