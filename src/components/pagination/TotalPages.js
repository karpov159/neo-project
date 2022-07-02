import { useDispatch, useSelector } from 'react-redux';
import { changePage } from '../claims-list/ClaimsSlice';
import Page from './pageComponent/Page';

const TotalPages = ({totalPages, active}) => {
    const {currentPage} = useSelector(state => state.claims),
          dispatch = useDispatch();
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
            <>
                {pages.slice(0,1)}

                {active > 4 ? 
                <div onClick={() => dispatch(changePage(currentPage - 3))} className="pagination__dots"></div> 
                : null}

                {active <= 3 ? pages.slice(1, 6) : null}

                {active > 3 && active + 3 <= totalPages ? pages.slice(active - 3, active + 2) : null}

                {active + 3 > totalPages && active !== totalPages? pages.slice(active - 4, totalPages - 1) : null}

                {active === totalPages ? pages.slice(active - 5, active - 1) : null}

                {active + 3 >= totalPages ? 
                null : 
                <div onClick={() => dispatch(changePage(currentPage + 3))} className="pagination__dots"></div>}

                {pages.pop()}
            </>
        )
    }
    return pages;
}

export default TotalPages;