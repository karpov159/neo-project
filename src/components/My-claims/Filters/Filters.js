import { useDispatch, useSelector } from 'react-redux';
import {
	changeColumnSort,
	changeOrderSort,
} from '../../../core/store/claim/claim.reducer';
import filtersList from '../../../helpers/filtersList';

const Filters = () => {
	const dispatch = useDispatch();
	const { orderSort } = useSelector((state) => state.claims);

	const renderFilters = (filtersList) => {
		return filtersList.map(({ label, icon, key, filter }) => {
			return (
				<div key={key} className='claims-list__item'>
					<div
						onClick={() => {
							if (label !== 'Actions') {
								dispatch(
									changeOrderSort(
										orderSort === 'desc' ? 'asc' : 'desc'
									)
								);
								dispatch(changeColumnSort(filter));
							}
						}}
						className='claims-list__filter'>
						<div>{label}</div>

						{icon ? <img src={icon} alt='filter' /> : null}
					</div>
				</div>
			);
		});
	};

	const filters = renderFilters(filtersList);

	return <div className='claims-list__filters'>{filters}</div>;
};

export default Filters;
