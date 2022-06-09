import useProjectService from "../../services/ProjectService";

import Input from "../input/input"
import Button from "../button/button";
import { useNavigate } from "react-router-dom";
import Title from "../title/title";
import Mail from '../../assets/icons/icon-mail.svg';
import Lock from '../../assets/icons/icon-lock.svg';


const Registration = (props) => {

    const navigate = useNavigate();
    const {onRegistration} = useProjectService();

    const onSubmit = (e) => {
        e.preventDefault();
        onRegistration({
            "fullName": "Maxim Karpov",
            "email": "karpov123",
            "password": "123456"
        }).then(console.log)
        navigate('/')
    }


    

    return (
        <>
            <Title title="Create your personal account"/>
            <form className="form form_mt20" onSubmit={(e) => onSubmit(e)}>
                <Input label={'Name'} placeholder={'Type your name'} icon={Mail} />
                <Input label={'surname'} placeholder={'Type your surname'} icon={Mail} />
                <Input label={'E-MAIL'} placeholder={'Type your e-mail'} icon={Mail} />
                <Input label={'password'} placeholder={'Type your password'} icon={Lock} />
                <Input label={'password'} placeholder={'Type your password again'} icon={Lock} />
                <div className="form__btns">
                    <Button onClick label={'Cancel'} addClass={'button_cancel button_w45'}/>
                    <Button label={'Continue'} addClass={'button_w45'} />
                </div>
            </form>
        </>


       

    )
}

export default Registration;