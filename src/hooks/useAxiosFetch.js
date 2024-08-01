import { useState, useEffect } from "react";
import axios from "axios";
import React from 'react'

const useAxiosFetch = (dataURL) => {
    const [data, setData] = useState([])
    const [fetcherror, setFetchError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)

    useEffect(() =>{
        let isMounted = true;
        const source = axios.CancelToken.source();
        const fetchData = async(url) =>{
            setIsLoading(true);
            try{
                const response = await axios.get(url, {
                    cancelToken: source.token
                });
                if(isMounted){
                    setData(response.data)
                    setFetchError(null)
                }
            }
            catch(err){
                setFetchError(err.message)
                setData([]);
            }
            finally{
               (isMounted && setTimeout(() => {
                setIsLoading(false)
               }, 2000))
            }
        }
        fetchData(dataURL)
        const cleanUp = () =>{
            console.log("clean up")
            isMounted =false;
            source.cancel(); 
        }
        return cleanUp;
    }, [dataURL])

  return {data, fetcherror, isLoading}
}

export default useAxiosFetch
