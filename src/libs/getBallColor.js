
const getBallColor = (type) => {
    switch (type) {
        case 'Software':
            return '#FF7675';
        case 'Troubleshooting':
            return '#6C5CE7';
        case 'Networking':
            return '#FDCB6E';
        default:
            return '#7DB59A';
        }   
    } 

export default getBallColor;
