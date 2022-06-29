
const ErrorInput = ({text, addClass}) => {
    const classes = addClass ? 'error-input ' + addClass : 'error-input';

    return (
        <div className={classes}>{text}</div>
    )
}

export default ErrorInput;