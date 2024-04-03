import { useState } from 'react'

export default useApi = (apiFunc) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(false);
    const [ loading, setLoading ] = useState(false);
  
    const request = async (...args) => {
      setLoading(true);
      const response = await apiFunc(...args);
 
      setLoading(false);

      if(response.ok) {
        setData(response.data);
        // console.log(response.data);
        setError(false);
      } else {
        setError(true);
      };
      
      return response;
     
    };

    return { request , data, error, loading};
}