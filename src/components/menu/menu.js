import MiniLogo from '../../assets/img/logo_mini.svg';
import IconHome from '../../assets/icons/icon-home.svg';
import IconGlobe from '../../assets/icons/icon-globe.svg';
import IconArchive from '../../assets/icons/icon-archive.svg';
import IconPieChart from '../../assets/icons/icon-pie-chart.svg';
import IconDollar from '../../assets/icons/icon-dollar-sign.svg';
import IconDatabase from '../../assets/icons/icon-database.svg';
import IconNavigation from '../../assets/icons/icon-navigation.svg';

import './menu.scss';

const Menu = () => {

    return (
        <aside className='menu'>
            <img className='menu__logo' src={MiniLogo} alt="logo"/>
            <div className="menu__links">
            <button className="menu__link menu__link_active">
                <img src={IconHome} alt="icon" />    
            </button>
            <button className="menu__link">
                <img src={IconGlobe} alt="icon" />    
            </button>
            <button className="menu__link">
                <img src={IconArchive} alt="icon" />    
            </button>
            <button className="menu__link">
                <img src={IconPieChart} alt="icon" />    
            </button>
            <button className="menu__link">
                <img src={IconDollar} alt="icon" />    
            </button>
            <button className="menu__link">
                <img src={IconDatabase} alt="icon" />    
            </button>
            <button className="menu__link">
                <img src={IconNavigation} alt="icon" />    
            </button>    
            </div>
        </aside>    
    )
}

export default Menu;