import { useDispatch } from "react-redux";
import { changePage } from "../../../store/ClaimsSlice";

const Page = ({num, active}) => {
    const classes = active ? 'pagination__page ' + active : 'pagination__page';
    const dispatch = useDispatch();

    return (
        <div
        onClick={() => dispatch(changePage(num))}
        className={classes}>{num}</div>
    )
}

export default Page;