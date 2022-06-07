import { useNavigate } from 'react-router-dom';

import './claim.scss';

const Claim = (props) => {
    const {title, data, type, status, id} = props,
          navigate = useNavigate();

    const ballColor = (type) => {
        switch (type) {
            case 'Software':
                return '#FF7675';
            case 'Troubleshooting':
                return '#6C5CE7';
            case 'Networking':
                return '#FDCB6E';
            default:
                return '#7DB59A';
        }
    } 

    const statusColor = (status) => {
        switch (status) {
            case 'declined':
                return '#E84393';
            case 'in progress':
                return '#FDCB6E';
            case 'done':
                return '#00B894';
            default:
                return '#6C5CE7';
        }
    } 

    return (
        <div className="claim">
            <div className="claim__text">{title}</div>
            <div className="claim__text">{data}</div>
            <div className="claim__type">
                <span style={{'background': `${ballColor(type)}`}} className="claim__ball"></span>
                <div className="claim__text">{type}</div>
            </div>
            <div style={{'background': `${statusColor(status)}`}} className="claim__status">{status}</div>
            <button 
            onClick={() => {
                navigate(`${id}`);
            }} 
            className="claim__button">Browse</button>
        </div>
    )
}

export default Claim;