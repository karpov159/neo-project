import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setBrowseAccessError } from '../../../store/ClaimsSlice';
import getStatusColor from '../../../helpers/getStatusColor';
import getBallColor from '../../../helpers/getBallColor';

import './Claim.scss';

const Claim = ({title, createdAt, type, status, id}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {role} = JSON.parse(localStorage.getItem('User'));

    const onClick = () => {
        if (role === 'admin') {
            navigate(`${id}`);
        } else {
            dispatch(setBrowseAccessError(true));
        }
    }


    return (
        <div className="claim">
            <div className="claim__title">
                <div className="claim__text">{title}</div>
            </div>
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
                onClick={onClick} 
                className="claim__button">Browse
            </button>
        </div>
    )
}

export default Claim;