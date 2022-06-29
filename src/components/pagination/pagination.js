import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import getTotalPages from '../../helpers/getTotalPages';
import store from '../../store';
import { selectAll, changePage } from '../claims-list/ClaimsSlice';
import Page from './pageComponent/Page';

import Left from '../../assets/icons/pagination/Left.png';
import Right from '../../assets/icons/pagination/Right.png';

import './pagination.scss';

const Pagination = () => {
    const {currentPage} = useSelector(state => state.claims),
          claims = selectAll(store.getState()),
          dispatch = useDispatch(),
          totalPages = getTotalPages(claims);

    useEffect(() => {
        if (currentPage > totalPages) {
            dispatch(changePage(1));
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentPage, totalPages])

    // если пользователь на странице 1, то стрелочка скрыта
    const leftArrow = currentPage === 1 || totalPages < 1 ? 
        null : 
        <button 
        onClick={() => dispatch(changePage(currentPage - 1))}
        className="pagination__left"
        >
        <img src={Left} alt="left"/>    
        </button>;

    // если пользователь на последней странице, то стрелочка скрыта
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

const TotalPages = ({totalPages, active}) => {
    // получаем массив с элементами страниц
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
        pages.push(
        <Page 
        key={i}
        active={active === i ? 'pagination__page_active' : null} 
        num={i}/>
        )
    }

    if (totalPages > 8) {
        return (
            // доработать
            <>
                {pages.slice(0,1)}

                {active > 4 ? 
                <div className="pagination__dots"></div> : null}

                {active <= 3 ? pages.slice(1, 6) : null}

                {active > 3 && active + 3 <= totalPages ? pages.slice(active - 3, active + 2) : null}

                {active + 3 > totalPages && active !== totalPages? pages.slice(active - 4, totalPages - 1) : null}

                {active === totalPages ? pages.slice(active - 5, active - 1) : null}

                {active + 3 >= totalPages ? null : <div className="pagination__dots"></div>}

                {pages.pop()}
            </>
        )
    }
    return pages;
}

export default Pagination;