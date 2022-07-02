import { useSelector } from "react-redux";

const PageLink = ({icon, active, mobileName}) => {
    const {openedHamburger} = useSelector(state => state.menu),
          classes = active ? 'menu__link menu__link_active' : 'menu__link',
          name = openedHamburger ? <div className='menu__name'>{mobileName}</div> : null;

    return (
        <button className={classes}>
            <img src={icon} alt="icon" />
            {name}
        </button>
    )
}

export default PageLink;