import ClaimsList from '../claims-list/claims-list';
import Title from '../title/title';
import IconPlus from '../../assets/icons/icon-plus.svg';

import './my-claims.scss';

const MyClaims = (props) => {
    const {onToggle} = props;

    return (
        <div className="my-claims">
            <div className="my-claims__headline">
                <Title title={'Your claims'}/>
                <button onClick={onToggle} className="my-claims__btn">
                    <img src={IconPlus} alt="plus"/>
                    Create claim
                </button>
            </div>
            <ClaimsList/>
        </div>
    )
}

export default MyClaims;