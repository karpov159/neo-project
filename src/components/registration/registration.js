import Input from "../input/input"
import Button from "../button/button";
import { useNavigate } from "react-router-dom";
import Title from "../title/title";

const Registration = (props) => {
    const {mailIcon, lockIcon} = props;
    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();
        navigate('/')
    }

    return (
        <>
            <Title title="Create your personal account"/>
            <form onSubmit={(e) => onSubmit(e)}>
                <Input label={'Name'} placeholder={'Type your name'} icon={mailIcon} />
                <Input label={'surname'} placeholder={'Type your surname'} icon={lockIcon} />
                <Input label={'E-MAIL'} placeholder={'Type your e-mail'} icon={mailIcon} />
                <Input label={'password'} placeholder={'Type your password'} icon={lockIcon} />
                <Input label={'password'} placeholder={'Type your password again'} icon={lockIcon} />
                <Button label={'Continue'} addClass={'button_main'}/>
            </form>
        </>


       

    )
}

export default Registration;