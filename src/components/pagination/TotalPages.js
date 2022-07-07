import { useDispatch } from 'react-redux';
import { changePage } from '../../store/ClaimsSlice';
import getPagesToShow from '../../helpers/getPagesToShow';
import Page from './Page/Page';

const TotalPages = ({totalPages, active}) => {
    const dispatch = useDispatch();
    const pages = [];

    for (let i = 1; i <= totalPages; i++) {
        pages.push(
        <Page 
        key={i}
        active={active === i ? 'pagination__page_active' : null} 
        num={i}/>
        )
    }

    const content = getPagesToShow(active, pages, totalPages);
    const firstPage = pages[0];
    const lastPage = pages[totalPages-1];
    const leftDot = 
        active > 4 ? 
        <div onClick={() => dispatch(changePage(active - 3))} className="pagination__dots"></div> : 
        null;

    const rightDot = 
        active + 3 >= totalPages ? 
        null : 
        <div onClick={() => dispatch(changePage(active + 3))} className="pagination__dots"></div>;

    if (totalPages > 8) {
        return (
            <>
                {firstPage}

                {leftDot}

                {content}

                {rightDot}

                {lastPage}
            </>
        )
    }
    return pages;
}

export default TotalPages;