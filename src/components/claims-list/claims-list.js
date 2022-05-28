import Claim from '../claim/claim';
import IconFilter from '../../assets/icons/filter.png';

import './claims-list.scss';

const ClaimsList = () => {
    const claims = [
        {title: 'Figma smart web system for to build',
        data: '12/04/2021',
        type: 'Hardware',
        status: 'new',
        key: '1'
        },
        {title: 'Figma smart web system for to build',
        data: '12/04/2021',
        type: 'Software',
        status: 'declined',
        key: '2'
        },
        {title: 'Figma smart web system for to build',
        data: '12/04/2021',
        type: 'Troubleshooting',
        status: 'in progress',
        key: '3'
        },
        {title: 'Figma smart web system for to build',
        data: '12/04/2021',
        type: 'Networking',
        status: 'done',
        key: '3'
        },
    ]
    

    const items = () => {
        return (
            claims.map(({title, data, type, status, key}) => {
                return <Claim title={title} 
                data={data} 
                type={type} 
                status={status}
                key={key}
                />
            })
        )
    }

    return (
        <div className="claims-list">
            <div className="claims-list__filters">
                <div className="claims-list__filter">
                    <div>Title</div>
                    <img src={IconFilter} alt="filter" />    
                </div>
                <div className="claims-list__filter">
                    <div>Created</div>
                    <img src={IconFilter} alt="filter" />    
                </div>
                <div className="claims-list__filter">
                    <div>Type</div>
                    <img src={IconFilter} alt="filter" />    
                </div>
                <div className="claims-list__filter">
                    <div>Status</div>
                    <img src={IconFilter} alt="filter" />    
                </div>
                <div className="claims-list__filter">
                    <div>Actions</div>
                </div>            
            </div>
            {items()}    
        </div>
    )
}

export default ClaimsList;