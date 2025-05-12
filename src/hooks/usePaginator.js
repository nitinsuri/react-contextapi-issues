import React, {useState, useEffect} from 'react';

const usePaginator = (data, pageSize) => {
    const [start, setStart] = useState(0);
    const [paginatedData, setPaginatedData] = useState([data])

    return [paginatedData]
}

export default usePaginator;