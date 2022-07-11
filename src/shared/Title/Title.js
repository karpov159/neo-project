import './Title.scss';

const Title = ({ title, addClass }) => {
	const classes = addClass ? 'title ' + addClass : 'title';

	return <h2 className={classes}>{title}</h2>;
};

export default Title;
