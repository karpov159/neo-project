import { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import useProjectService from '../../services/ProjectService';
import ClaimsList from '../claims-list/claims-list';
import Pagination from '../pagination/pagination';
import Title from '../generic/title/title';

import './my-claims.scss';

const countTotalPages = (data) => {
    if (data) {
        return Math.ceil(data.length / 10);
    }        
}

// фильтрует, если поисковая строка не пустая
const filterClaims = (searchWord, data) => {
    if (searchWord < 1) {
        return data;
    }

    return data.filter(item => item.title.toLowerCase().indexOf(searchWord.toLowerCase()) > -1);
}

const MyClaims = ({searchWord, claims, showClaim, loading, error}) => {
    const [offset, setOffset] = useState(0),
          [activePage, setActivePage] = useState(),
          [sortedClaims, setSortedClaims] = useState([]),
          [sort, setSort] = useState(false),
          [toggleOrder, setToggleOrder] = useState(true),
          navigate = useNavigate();

    const {getAllClaims} = useProjectService();

    // перелистывает страницу нажатием на кнопки
    const changePageByArrows = (num) => {
        setOffset(offset => {
            const value = offset + num;
            if (value < 0) {
                return 0;
            }
            if (value / totalPages === 10) {
                return value - 10;
            }
            return value;
        });
    }

    // перелистывает нажатием на цифры
    const changePageByNumbers = (num) => {
        setOffset(num * 10 - 10)
    }

    const onSetSort = (sort) => {
        setSort(sort);
    }
    
    useEffect(() => {
        if (sort) {
            const order = toggleOrder ? 'desc' : 'asc';

            if (sort === 'data') {
                const value = toggleOrder ? 1 : -1;
                const sorted = [...sortedClaims].sort((a, b) => {
                    if (a.createdAt === b.createdAt) {
                        return 0;
                    }
                    return a.createdAt > b.createdAt ? value : value * -1;
                });
                setSortedClaims(sorted);
            } else {
                getAllClaims(sort, order).then(setSortedClaims)
            }
        }
    }, [sort, toggleOrder])

    const filtredData = searchWord ? filterClaims(searchWord, sortedClaims) : sortedClaims;
    const visibleData = filtredData.slice(offset, offset + 10);

    const totalPages = useMemo(() => {
        return countTotalPages(filtredData);
    }, [filtredData])

    useEffect(() => {
        setActivePage(offset / 10 + 1);

        if (activePage > totalPages) {
            setActivePage(1);
            setOffset(0);
        }
        
    }, [offset, totalPages, activePage])

    useEffect(() => {
        setSortedClaims(claims);
    }, [claims])

    return (
        <div className="my-claims">
            <div className="my-claims__headline">
                <Title title='Your claims'/>
                <button
                onClick={() => {
                    navigate('create-new-claim');
                }} 
                className="my-claims__btn">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 13V27" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M13 20H27" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
            </div>
            <ClaimsList 
            showClaim={showClaim}
            onSetSort={onSetSort}
            data={visibleData}
            loading={loading}
            error={error}
            setToggleOrder={setToggleOrder}
            />
            <Pagination
            changePageByNumbers={changePageByNumbers} 
            activePage={activePage} 
            changePageByArrows={changePageByArrows} 
            totalPages={totalPages}/>
        </div>
    )
}

export default MyClaims;