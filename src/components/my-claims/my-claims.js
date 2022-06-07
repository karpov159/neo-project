import { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import ClaimsList from '../claims-list/claims-list';
import Pagination from '../pagination/pagination';
import Title from '../title/title';

import IconPlus from '../../assets/icons/icon-plus.svg';

import './my-claims.scss';

const countTotalPages = (data) => {
    if (data) {
        return Math.ceil(data.length / 10);
    }        
}

const MyClaims = (props) => {
    const {searchWord, claims, showClaim, loading, error} = props;
    const [offset, setOffset] = useState(0);
    const [activePage, setActivePage] = useState();
    const [sortedClaims, setSortedClaims] = useState([]);
    const [sort, setSort] = useState(false);
    const [toggleOrder, setToggleOrder] = useState(true);
    const navigate = useNavigate();

    // фильтрует, если поисковая строка не пустая
    const filterClaims = (searchWord, data) => {
        if (searchWord < 1) {
            console.log(data)
            return data;
        }

        return data.filter(item => item.title.toLowerCase().indexOf(searchWord.toLowerCase()) > -1);
    }

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

    // 
    const sortClaims = (data) => {
        setSortedClaims(data);
    }

    const onSetSort = (sort) => {
        setSort(sort);
    }

    useEffect(() => {
        if (sort) {
            setToggleOrder(toggleOrder => !toggleOrder);

            const value = toggleOrder ? 1 : -1;
    
            const sorted = [...sortedClaims].sort((a, b) => {
                if (a[sort] === b[sort]) {
                    return 0;
                }
                return a[sort] > b[sort] ? value : value * -1;
            });
    
            setSort(false)
            setSortedClaims(sorted)
        }
    }, [sort, sortedClaims, toggleOrder])

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
                <Title title={'Your claims'}/>
                <button 
                onClick={() => {
                    navigate('create-new-claim');
                }} 
                className="my-claims__btn">
                    <img src={IconPlus} alt="plus"/>
                    Create claim
                </button>
            </div>
            <ClaimsList 
            showClaim={showClaim}
            onSetSort={onSetSort}
            sortClaims={sortClaims} 
            data={visibleData}
            loading={loading}
            error={error}
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