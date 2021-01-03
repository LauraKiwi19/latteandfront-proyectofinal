import  { useState,  useEffect } from 'react';
import data from 'utils/apiClient';


function useFetch(url){
 const [fetchState, setFetchState] = useState({
    data: null,
    error: false,
    loading: true,
 });

 useEffect(
   function() {
     async function getData(){
       const response = await data.get(url);
       if (!response.ok){
         setFetchState({data: null, error: true, loading: false});
       }
       setFetchState({data: response, error: false, loading: false});
     }
     getData();
   },
   [url]
 );

 return fetchState;
}

export default useFetch;