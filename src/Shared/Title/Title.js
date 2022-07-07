import './Title.scss';

const Title = ({title, custom}) => {
    if (custom) {
        return (
            <h4 className="title" >{title}</h4>
        )
    }

    return (
        <h2 className="title" >{title}</h2>
    )
}

export default Title;