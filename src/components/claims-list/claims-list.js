import { useState } from 'react';
import Claim from '../claim/claim';
import IconFilter from '../../assets/icons/filter.png';

import './claims-list.scss';

const ClaimsList = (props) => {
    const [sort, setSort] = useState(false),
          [toggleOrder, setToggleOrder] = useState(true),
          [claims, setClaims] = useState(''),
          {data} = props;

    const filters = [
        {label: 'Title',
        icon: IconFilter,
        filter: 'title',
        key: '1'
        },
        {label: 'Created',
        icon: IconFilter,
        filter: 'data',
        key: '2'
        },
        {label: 'Type',
        icon: IconFilter,
        filter: 'type',
        key: '3'
        },
        {label: 'Status',
        icon: IconFilter,
        filter: 'status',
        key: '4'
        },
        {label: 'Actions',
        icon: null,
        filter: false,
        key: '5'
        },
    ]
    

    const createItems = (claims) => {
        const sorted = sort ? sortItems(claims) : claims;
        return (
            sorted.map(({title, data, type, status, key}) => {
                return <Claim title={title} 
                data={data} 
                type={type} 
                status={status}
                key={key}
                />
            })
        )
    }

    const createFilters = (filters) => {

        return filters.map(({label, icon, key, filter}) => {
            return (
                <div key={key} className="claims-list__item">
                    <div onClick={() => {onSetSort(filter);}} 
                    className='claims-list__filter'>
                        <div>{label}</div>
                        {icon ? <img src={icon} alt="filter" /> : null }  
                    </div>
                </div>
            )
        })
    }

    const onSetSort = (sort) => {
        setSort(sort);
    }

    const sortItems = (items) => {
        setToggleOrder(toggleOrder => !toggleOrder);

        console.log(toggleOrder)
        const value = toggleOrder ? 1 : -1;

        const sorted = [...items].sort((a, b) => {
            if (a[sort] === b[sort]) {
                return 0;
            }
            return a[sort] > b[sort] ? value : value * -1;
        });

        setClaims(sorted);
        setSort(false)

        return sorted;
    }


    return (
        <div className="claims-list">
            <div className="claims-list__filters">
                {createFilters(filters)}
            </div>
            {createItems(claims || data)}    
        </div>
    )
}

export default ClaimsList;