import PageLink from './pageLink/PageLink';
import menuLinkInfo from '../../helpers/menuLinkInfo';

import MiniLogo from '../../assets/img/logo_mini.svg';

import './menu.scss';

const Menu = () => {
    const mobile = false,
          activeLink = "Home",
          activeClass = mobile ? 'menu menu_active' : 'menu';
    return (
        <>
            <aside className={activeClass}>
                {!activeClass ? <img className='menu__logo' src={MiniLogo} alt="logo"/> : null}
                <div className="menu__links">
                    <View activeLink={activeLink}/>
                </div>
            </aside>
            {mobile ? <div className='overlay'/> : null}
        </>
    
    )
}

const View = ({activeLink}) => {
    return menuLinkInfo.map(({name, icon}) => {
        return <PageLink 
        icon={icon} 
        active={activeLink === name ? true : false} 
        mobileName={name}
        />
    })
}

export default Menu;