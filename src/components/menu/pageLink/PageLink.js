
const PageLink = ({icon, active, mobileName}) => {
    const mobile = false,
          classes = active ? 'menu__link menu__link_active' : 'menu__link',
          name = mobile ? <div className='menu__name'>{mobileName}</div> : null;

    return (
        <button className={classes}>
            <img src={icon} alt="icon" />
            {name}
        </button>
    )
}

export default PageLink;