import Claim from '../claim/claim';
import Spinner from '../spinner/Spiner';
import ErrorMessage from '../errorMessage/errorMessage';

import IconFilter from '../../assets/icons/filter.png';

import './claims-list.scss';

const ClaimsList = (props) => {
    const {data, onSetSort, showClaim, loading, error, setToggleOrder} = props;

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

    const spinner = loading ? <Spinner/> : null,
          errorMessage = error ? <ErrorMessage/> : null,
          content = !error && !loading ? <Items showClaim={showClaim} data={data}/> : null;

    return (
        <div className="claims-list">
            <div className="claims-list__filters">
                <Filtres onSetSort={onSetSort} filtersList={filtersList} setToggleOrder={setToggleOrder}/>
            </div>
            {spinner}
            {errorMessage}
            {content}
        </div>
    )
}

// создание айтемов
const Items = (props) => {
    const {data, showClaim} = props
    return (
        data.map(({title, createdAt, type, status, _id}) => {
            return <Claim 
            showClaim={showClaim}
            title={title} 
            createdAt={createdAt.slice(0, 10)} 
            type={type ? type.name : null} 
            status={status.name}
            key={_id}
            id={_id}
            />
        })
    )
}


// создание фильтров
const Filtres = (props) => {
    const {filtersList, onSetSort, setToggleOrder} = props
    return filtersList.map(({label, icon, key, filter}) => {
        return (
            <div key={key} className="claims-list__item">
                <div onClick={() => {
                    onSetSort(filter);
                    setToggleOrder(toggleOrder => !toggleOrder);
                }} 
                className='claims-list__filter'>
                    <div>{label}</div>
                    {icon ? <img src={icon} alt="filter" /> : null }  
                </div>
            </div>
        )
        
    })
}

export default ClaimsList;