import { useNavigate } from "react-router-dom";
import Title from '../title/title';

const Page404 = () => {
    const navigate = useNavigate();
    return (
        <div>
            <Title title={'No such page'}/>
            <button onClick={() => navigate(-1)}>
                Go back
            </button>
        </div>
    )
}

export default Page404;