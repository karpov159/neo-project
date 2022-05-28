import Menu from '../menu/menu';
import Header from '../header/header';
import ClaimsList from '../claims-list/claims-list';
import IconPlus from '../../assets/icons/icon-plus.svg';

import './homepage.scss';

const Homepage = () => {
    return (
        <section className='homepage'>
            <Menu/>
            <Header/>
            <div className="homepage__block">
                <div className="homepage__headline">
                    <h2 className="homepage__title" >Your claims</h2>
                    <button className="homepage__btn">
                        <img src={IconPlus} alt="plus"/>
                        Create claim
                    </button>
                </div>
                <ClaimsList/>

            </div>

        </section>
    )
}

export default Homepage;