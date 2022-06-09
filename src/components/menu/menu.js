import PageLink from './pageLink/PageLink';

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
    const mobile = false;
    const activeClass = mobile ? 'menu menu_active' : 'menu';
    return (
        <>
            <aside className={activeClass}>
                {!activeClass ? <img className='menu__logo' src={MiniLogo} alt="logo"/> : null}
                <div className="menu__links">
                    <PageLink icon={IconHome} active mobileName="Home"/>
                    <PageLink icon={IconGlobe} mobileName="Services"/>
                    <PageLink icon={IconArchive} mobileName="Storage"/>
                    <PageLink icon={IconPieChart} mobileName="Charts"/>
                    <PageLink icon={IconDollar} mobileName="Currency"/>
                    <PageLink icon={IconDatabase} mobileName="Base"/>
                    <PageLink icon={IconNavigation} mobileName="Locations"/>
                </div>
            </aside>
        {mobile ? <div className='overlay'/> : null}
        </>
    
    )
}

export default Menu;