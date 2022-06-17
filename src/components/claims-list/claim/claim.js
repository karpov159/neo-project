import { useNavigate } from 'react-router-dom';
import getStatusColor from '../../../helpers/getStatusColor';
import getBallColor from '../../../helpers/getBallColor';

import './claim.scss';

const Claim = ({title, createdAt, type, status, id}) => {
    const navigate = useNavigate();

    return (
        <div className="claim">
            <div className="claim__title">{title}</div>
            <div className="claim__block">
            <div className="claim__filter">Created</div>
                <div className="claim__text">{createdAt}</div>
            </div>
            <div className="claim__block">
                <div className="claim__filter">Type</div>
                <div className="claim__type">
                    <span style={{'background': `${getBallColor(type)}`}} className="claim__ball"></span>
                    <div className="claim__text">{type}</div>
                </div>
            </div>

            <div className="claim__block">
                <div className="claim__filter">Status</div>
                <div style={{'background': `${getStatusColor(status)}`}} className="claim__status">{status}</div>
            </div>
            <button 
            onClick={() => {
                navigate(`${id}`);
            }} 
            className="claim__button">Browse</button>
        </div>
    )
}

export default Claim;