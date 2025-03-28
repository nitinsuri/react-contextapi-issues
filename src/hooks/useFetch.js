import React, {useState, useEffect } from 'react';

export default function useFetch(url){
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const fetchData = () => {
        fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a')
        .then((res)=> {
            setLoading(true)
            return res
        })
        .then(res => res.json())
        .then(res => res.drinks)
        .then(res => {
            setLoading(false)
            setData(res)
        })
        .catch((err)=>{
            setError(err.message)
        });
    }

    useEffect(()=>{
       fetchData()
    },[url])

    return [data, loading, error]
};