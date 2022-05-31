import Claim from '../claim/claim';
import IconFilter from '../../assets/icons/filter.png';

import './claims-list.scss';

const ClaimsList = (props) => {
    const {data, onSetSort} = props;

    const filtersList = [
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
    



    return (
        <div className="claims-list">
            <div className="claims-list__filters">
                <Filtres onSetSort={onSetSort} filtersList={filtersList}/>
            </div>
            <Items data={data}/>    
        </div>
    )
}

// создание айтемов
const Items = (props) => {
    const {data} = props
    return (
        data.map(({title, data, type, status, key}) => {
            return <Claim title={title} 
            data={data} 
            type={type} 
            status={status}
            key={key}
            />
        })
    )
}


// создание фильтров
const Filtres = (props) => {
    const {filtersList, onSetSort} = props
    return filtersList.map(({label, icon, key, filter}) => {
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

export default ClaimsList;