import filtersList from '../../helpers/filtersList';
import Claim from './claim/claim';
import Spinner from '../generic/spinner/Spiner';
import ErrorMessage from '../errorMessage/errorMessage';


import './claims-list.scss';

const ClaimsList = ({data, onSetSort, showClaim, loading, error, setToggleOrder}) => {

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
const Items = ({data, showClaim}) => {
    return (
        data.map(({title, createdAt, type, status, _id}) => {
            return <Claim 
            showClaim={showClaim}
            title={title} 
            createdAt={createdAt.slice(0, 10)} 
            type={type ? type.name : null} 
            status={status ? status.name : null}
            key={_id}
            id={_id}
            />
        })
    )
}

// создание фильтров
const Filtres = ({filtersList, onSetSort, setToggleOrder}) => {
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