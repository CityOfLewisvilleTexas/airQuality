import React, { useState, useEffect } from "react";

const useFetch = url => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true)
  
    async function fetchData() {
      const response = await fetch(url);
      const text = await response.text()
      const clippedText = await text.toString()
      console.log(clippedText)
      setData(clippedText)
      setLoading(false)
    }
  
    useEffect(() => {
      fetchData();
    }, [url]);
  
    return {loading, data};
  };
  
  const DiscussionText = props => {
    const {loading, data} = useFetch('https://cors-anywhere.herokuapp.com/https://www.tceq.texas.gov/airquality/monops/forecast_today.html');
  
    return (
        <div>
            { loading ? <div>Loading...</div> : 
              <div style={{'backgroundColor':'#444'}}>
                  <p>{data.substr(data.indexOf('<!-- Discussion Text -->'),43760) || 'N/A' }</p>
              </div>
          }
  
        </div>
    )
  };
  
  export default DiscussionText;
