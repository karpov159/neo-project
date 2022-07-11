import IconFilter from '../assets/icons/filter.png';

const filtersList = [
	{ label: 'Title', icon: IconFilter, filter: 'title', key: '1' },
	{ label: 'Created', icon: IconFilter, filter: 'data', key: '2' },
	{ label: 'Type', icon: IconFilter, filter: 'type', key: '3' },
	{ label: 'Status', icon: IconFilter, filter: 'status', key: '4' },
	{ label: 'Actions', icon: null, filter: false, key: '5' },
];

export default filtersList;
