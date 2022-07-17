import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { updateClaim, getClaim } from '../../core/store/claim/claim.action';
import { useDispatch } from 'react-redux';
import getBallColor from '../../helpers/getBallColor';
import getClaimType from '../../helpers/getClaimType';
import Typography from '../../shared/Typography/Typography';
import Button from '../../shared/Button/Button';

import IconDown from '../../assets/icons/icon-chevron-down.png';
import './Browsed-claim.scss';

const BrowsedClaim = ({ setSearchInput }) => {
	const [title, setTitle] = useState('');
	const [type, setType] = useState('');
	const [description, setDescription] = useState('');
	const { claimId } = useParams();
	const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		dispatch(getClaim(claimId))
			.unwrap()
			.then((claim) => {
				setTitle(claim.title);
				setType(claim.type);
				setDescription(claim.description);
			})
			.catch(() => {
				setTitle('no data');
				setType('no data');
				setDescription('no data');
			});
	}, [claimId, dispatch]);

	useEffect(() => {
		setSearchInput(false);
		return () => {
			setSearchInput(true);
		};
	});

	const onUpdateClaim = (status) => {
		const updatedClaim = {
			body: {
				title,
				description,
				type: getClaimType(type),
				status,
			},
			claimId,
		};
		dispatch(updateClaim(updatedClaim))
			.unwrap()
			.then(() => navigate(-1));
	};

	return (
		<div className='browse-claim'>
			<Typography component='h2'>Incoming claim</Typography>

			<div className='browse-claim__item'>
				<span className='browse-claim__label'>Title</span>
				<div className='browse-claim__text'>{title}</div>
			</div>
			<div className='browse-claim__item'>
				<span className='browse-claim__label'>TYPE</span>
				<div className='browse-claim__type'>
					<span
						style={{ background: `${getBallColor(type)}` }}
						className='browse-claim__ball'></span>
					<div className='browse-claim__text'>{type}</div>
				</div>
				<img
					src={IconDown}
					alt='icon-down'
					className='browse-claim__img'
				/>
			</div>
			<div className='browse-claim__item'>
				<span className='browse-claim__label'>DESCRIPTION</span>
				<div className='browse-claim__text'>{description}</div>
			</div>

			<div className='browse-claim__btns'>
				<Button
					onClick={() => navigate(-1)}
					addClass={'button_cancel'}
					label={'Cancel'}
				/>
				<Button onClick={() => onUpdateClaim('done')} label={'Done'} />
				<Button
					onClick={() => onUpdateClaim('decl')}
					addClass={'button_decline'}
					label={'Decline'}
				/>
			</div>
		</div>
	);
};

export default BrowsedClaim;
