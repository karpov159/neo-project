const Spinner = () => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			style={{
				margin: 'auto',
				background: 'rgb(255, 255, 255)',
				display: 'block',
				shapeRendering: 'auto',
			}}
			width='150px'
			height='150px'
			viewBox='0 0 100 100'
			preserveAspectRatio='xMidYMid'>
			<circle
				cx='50'
				cy='50'
				fill='none'
				stroke='#7db59a'
				strokeWidth='10'
				r='35'
				strokeDasharray='164.93361431346415 56.97787143782138'>
				<animateTransform
					attributeName='transform'
					type='rotate'
					repeatCount='indefinite'
					dur='1.0204081632653061s'
					values='0 50 50;360 50 50'
					keyTimes='0;1'></animateTransform>
			</circle>
		</svg>
	);
};

export default Spinner;
