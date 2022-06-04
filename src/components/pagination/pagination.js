import Left from '../../assets/icons/pagination/Left.png';
import Right from '../../assets/icons/pagination/Right.png';


import './pagination.scss';

const Pagination = (props) => {
    const {totalPages, changePageByArrows, activePage, changePageByNumbers} = props;

    return (
        <div className="pagination">
            {activePage === 1 ? null : 
            <button 
            onClick={() => {
                changePageByArrows(-10);
            }} 
            className="pagination__left">
            <img src={Left} alt="left" />    
            </button>}
            <TotalPages 
            changePageByNumbers={changePageByNumbers}
            active={activePage} 
            totalPages={totalPages}
            />
            <button 
            style={activePage === totalPages ? {'visibility': 'hidden'} : null} 
            onClick={() => {
                changePageByArrows(10);
            }} 
            className="pagination__right">
                <img src={Right} alt="right" />    
            </button>        
        </div>
    )
}

const TotalPages = (props) => {
    const {totalPages, active, changePageByNumbers} = props;
    const pages = [];

    for (let i = 1; i <= totalPages; i++) {
        
        pages.push(
        <Page 
        changePageByNumbers={changePageByNumbers}
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

const Page = (props) => {
    const {num, active, changePageByNumbers} = props,
          classes = active ? 'pagination__page ' + active : 'pagination__page';

    return (
        <div
        onClick={() => changePageByNumbers(num)}
        className={classes}>{num}</div>
    )
}

export default Pagination;