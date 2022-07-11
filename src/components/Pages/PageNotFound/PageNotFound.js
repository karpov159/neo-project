import { useNavigate } from 'react-router-dom';
import Title from '../../../shared/Title/Title';

const PageNotFound = () => {
	const navigate = useNavigate();
	return (
		<div>
			<Title title={'No such page'} />
			<button onClick={() => navigate(-1)}>Go back</button>
		</div>
	);
};

export default PageNotFound;
