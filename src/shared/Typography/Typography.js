import './Typography.scss';

const Typography = ({ addClass, component, children }) => {
	const classes = addClass ? 'title ' + addClass : 'title';
	const Component = component || 'h1';

	return <Component className={classes}>{children}</Component>;
};

export default Typography;
