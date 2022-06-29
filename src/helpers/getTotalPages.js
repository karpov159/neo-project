const getTotalPages = (data) => {
    if (data) {
        return Math.ceil(data.length / 10);
    }        
}

export default getTotalPages