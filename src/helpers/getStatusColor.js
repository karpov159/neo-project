const getStatusColor = (status) => {
    if (status) {
        switch (status.toLowerCase()) {
            case 'declined':
                return '#E84393';
            case 'in progress':
                return '#FDCB6E';
            case 'done':
                return '#00B894';
            default:
                return '#6C5CE7';
        }
    }

} 

export default getStatusColor;