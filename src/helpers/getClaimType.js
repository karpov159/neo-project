const getClaimType = (type) => {
	switch (type) {
		case 'Networking': {
			return 'net';
		}
		case 'Troubleshooting': {
			return 'troublesh';
		}
		case 'Hardware': {
			return 'hard';
		}
		default: {
			return 'soft';
		}
	}
};

export default getClaimType;
