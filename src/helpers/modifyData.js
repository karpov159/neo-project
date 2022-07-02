const modifyData = ({title, createdAt, type, status, _id, description}) => {

    return {
        _id,
        createdAt: createdAt.slice(0, 10),
        status: status !== null ? status.name : status,
        title,
        type: type !== null ? type.name : type,
        description
    }

}

export default modifyData;
