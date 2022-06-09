import './pageLink.scss';

const PageLink = ({icon, active, mobileName}) => {
    const mobile = false;
    const classes = active ? 'menu__link menu__link_active' : 'menu__link';
    const name = mobile ? <div className='menu__name'>{mobileName}</div> : null;

    return (
        <button className={classes}>
            <img src={icon} alt="icon" />
            {name}
        </button>
    )
}

export default PageLink;